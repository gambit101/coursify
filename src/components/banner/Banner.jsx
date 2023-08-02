import Lottie from "lottie-react"
import banner from './banner.json'

const Banner = () => {
    return (
        <div className=" bg-[#003153] h-[400px] px-20">
            <div className="flex">

                {/* banner text */}

                <div className="pt-20 w-3/4">
                    <h1 className=" text-[#faefaa] text-6xl">
                        Look beyond the obvious.
                    </h1>
                    <h1 className=" text-yellow-400 text-6xl pt-5">
                        Find your next job,effortlessly.
                    </h1>

                    <div className=" w-3/4 mt-10">
                        <button className="btn rounded-3xl bg-yellow-400 border-none font-bold">Find your next hire</button>
                        <button className="btn rounded-3xl ml-5 bg-yellow-400 border-none font-bold">Find your next job</button>
                    </div>
                </div>

                {/* animation */}
                
                <div className="w-[30%] mt-10">
                    <Lottie animationData={banner} />
                </div>
            </div>
        </div>
    );
};

export default Banner;