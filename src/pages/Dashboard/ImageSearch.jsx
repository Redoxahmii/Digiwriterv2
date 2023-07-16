import { useEffect, useState } from "react";

const ImageSearch = () => {
  const [images, setImages] = useState([]);
  const [search, setsearch] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://lexica.art/api/v1/search?q=${search}`
      );
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      seterror(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://lexica.art/api/v1/search?q=cyberpunk`
        );
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        seterror(error);
      }
    };

    fetchData();
  }, []);

  const handleDownloadImage = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "digiwriterAI.jpg"; // Set the desired filename for the downloaded image
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <>
      <div className=" hero-content flex-col pb-20 pt-10">
        <div className="label">
          <label className="label-text font-semibold text-xl">
            Image Searcher with Prompts
          </label>
        </div>
        <input
          className="input transition-all focus:scale-105 input-bordered"
          type="text"
          placeholder="Enter your search..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button
          onClick={() => handleSubmit()}
          className="btn btn-primary gap-2 rounded-md group"
        >
          Search
          <svg
            xmlns="http:/ /www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 group-hover:stroke-black group-hover:scale-110 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        {error && (
          <div className="alert alert-error">
            <div className="flex-1">
              <label>{error.message}</label>
            </div>
          </div>
        )}
      </div>
      <div className="hero scroll-smooth lg:place-items-start min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-wrap lg:flex-row">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => navigator.clipboard.writeText(image.prompt)}
              className="card group w-96 hover:bg-primary rounded-xl bg-base-100 shadow-xl duration-300"
            >
              <figure className="lg:group-hover:brightness-110 lg:group-hover:blur-0 lg:blur-sm lg:group-hover:grayscale-0 lg:grayscale group-hover:transition-all transition-all">
                <img src={image.src} alt="" />
              </figure>
              <div className="card-body group-hover:transition-all group-hover:scale-105 transition-all">
                <h2 className="card-title text-primary-content">Prompt</h2>
                <h2 className="text-md">{image.prompt}</h2>
              </div>
              <div className="flex flex-row-reverse gap-1 mr-1 mb-1">
                <div className="tooltip" data-tip="Copy Prompt">
                  <button
                    className="btn btn-square rounded-xl group-hover:bg-base-100 bg-primary-focus"
                    onClick={() => navigator.clipboard.writeText(image.prompt)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="tooltip" data-tip="Download">
                  <button
                    className="btn btn-square rounded-xl group-hover:bg-base-100 bg-primary-focus"
                    onClick={() => handleDownloadImage(image.src)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSearch;
