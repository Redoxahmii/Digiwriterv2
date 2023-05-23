import { useEffect, useState } from "react"

const ImageSearch = () => {
  const [images, setImages] = useState([])
  const [search, setsearch] = useState('')
  const [error, seterror] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://lexica.art/api/v1/search?q=${search}`)
      const data = await response.json()
      setImages(data.images)
    } catch (error) {
      seterror(error)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://lexica.art/api/v1/search?q=cyberpunk`)
        const data = await response.json()
        setImages(data.images)
      } catch (error) {
        seterror(error)
      }
    }
    fetchData()
  }, [])




  return (
    <>
      <div className=" hero-content flex-col pb-20 pt-10">
        <div className="label">
          <label className="label-text font-semibold text-xl">Image Searcher with Prompts</label>
        </div>
        <input className="input input-bordered" type="text" placeholder="Enter your search..." value={search} onChange={(e) => setsearch(e.target.value)} />
        <button onClick={() => handleSubmit()} className="btn gap-2 rounded-md">
          Search
          <svg xmlns="http:/ /www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        {
          error && <div className="alert alert-error">
            <div className="flex-1">
              <label>{error}</label>
            </div>
          </div>
        }
      </div>
      <div className="hero lg:place-items-start min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-wrap lg:flex-row">
          {
            images.map(image => (
              <div key={image.id} className="card w-96 rounded-xl bg-base-100 shadow-xl">
                <figure>
                  <img src={image.src} alt='' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-primary-content">Prompt</h2>
                  <h2 className="text-sm">{image.prompt}</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ImageSearch