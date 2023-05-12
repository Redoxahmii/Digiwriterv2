import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import { RingLoader } from "react-spinners";

const ImageGenerator = () => {
    const [image1, setimage1] = useState('https://via.placeholder.com/1024x1024.png?text=Image+1');
    const [image2, setimage2] = useState('https://via.placeholder.com/1024x1024.png?text=Image+2');
    const [image3, setimage3] = useState('https://via.placeholder.com/1024x1024.png?text=Image+3');
    const [image4, setimage4] = useState('https://via.placeholder.com/1024x1024.png?text=Image+4');
    const [Response, setResponse] = useState('');
    const [num, setNum] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('');
    const configuration = new Configuration({
        apiKey: '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',
    })
    const openai = new OpenAIApi(configuration);
    const clear = () => {
        setimage1('https://via.placeholder.com/1024x1024.png?text=Image+1')
        setimage2('https://via.placeholder.com/1024x1024.png?text=Image+2')
        setimage3('https://via.placeholder.com/1024x1024.png?text=Image+3')
        setimage4('https://via.placeholder.com/1024x1024.png?text=Image+4')
    }
    const completion = async () => {
        setIsLoading(true);
        if (!Response) {
            setError("Please enter a prompt");
            setIsLoading(false);
            return;
        }
        if (isNaN(num) || num < 1 || num > 4) {
            setError("Please enter a valid number between 1 and 4");
            setIsLoading(false);
            return;
        }
        try {
            const res = await openai.createImage({
                prompt: Response,
                n: parseInt(num),
                size: "1024x1024",
            });
            setError('')
            if (num >= 1) {
                setimage1(res.data.data[0].url)
            }
            if (num >= 2) {
                setimage2(res.data.data[1].url)
            }
            if (num >= 3) {
                setimage3(res.data.data[2].url)
            }
            if (num >= 4) {
                setimage4(res.data.data[3].url)
            }
            setLoaded(true)
            console.log(res)
        } catch (e) {
            setError(e);
        }
        setIsLoading(false);
    };
    return (
        <div className="w-[90vw] h-[90vh] bg-base-200">
            <div className="flex w-full h-full flex-wrap pl-20 pt-24 gap-96 mx-10">
                <div className="form-control w-full max-w-xs gap-2">
                    <label className="label">
                        <h1 className="text-lg font-bold justify-center">Due to high quality images take time to show please be patient! 🦥</h1>
                    </label>
                    {error && <p className='text-error'>{error}</p>}
                    <label className="label">
                        <h1 className="label-text font-semibold">Describe your images as detailed as possible!</h1>
                    </label>
                    <input placeholder="let your creativity run wild!" className="input input-primary border" type="text" value={Response} onChange={(e) => setResponse(e.target.value)} />
                    <label className="label">
                        <span className="label-text font-semibold">Number of images</span>
                    </label>
                    <select className="select select-bordered select-primary text-gray-400 w-full max-w-xs" value={num} onChange={(e) => setNum(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button className="btn btn-primary rounded-xl mt-3" onClick={completion}>Generate</button>
                    <button className="btn btn-primary rounded-xl mt-3" onClick={clear}>Clear Images</button>
                    {!loaded && isLoading && (
                        <div className="flex justify-center mt-5">
                            <RingLoader color={"white"} loading={isLoading} size={150} />
                            <p className="mt-3 text-md"> Setting images...</p>
                        </div>
                    )}
                </div>
                <div className="">
                    <h1 className="text-xl text-center font-semibold mb-2">Scroll to see the images 👇🏼</h1>
                    <div className="carousel gap-2 carousel-vertical h-96 relative z-10 carousel-end rounded-box bg-base-300">
                        {image1 && (
                            <div className="carousel-item h-full">
                                <img src={image1} className="bg-contain max-w-full max-h-full" alt="AI" />
                            </div>
                        )}
                        {image2 && (
                            <div className="carousel-item h-full">
                                <img src={image2} className="bg-contain max-w-full max-h-full" alt="AI" />
                            </div>
                        )}
                        {image3 && (
                            <div className="carousel-item h-full">
                                <img src={image3} className="bg-contain max-w-full max-h-full" alt="AI" />
                            </div>
                        )}
                        {image4 && (
                            <div className="carousel-item h-full">
                                <img src={image4} className="bg-contain max-w-full max-h-full" alt="AI" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ImageGenerator