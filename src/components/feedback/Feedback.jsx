// import { LottiePlayer } from 'lottie-react';
import question from './question.json';
import Lottie from "lottie-react"
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react';


const Feedback = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="bg-[#faefaa] text-black mt-20 px-20 ">

            <h1 className="text-5xl mb-10 font-bold pt-10 text-center">Some common questions</h1>
            {/* accordion */}
            <div className='grid grid-cols-2 gap-20'>

                <div className="join join-vertical w-full pt-10" data-aos='fade-right'>
                    <div className="collapse collapse-arrow join-item border">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium border-2 border-black">
                            How can you join?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius odit, nemo odio obcaecati asperiores perferendis quibusdam saepe facere, quidem quod ratione assumenda, expedita reiciendis quae ipsam velit itaque enim.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium  border-2 border-black">
                            How to get help from us?
                        </div>
                        <div className="collapse-content border-black">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus quod soluta incidunt tenetur, necessitatibus vitae provident, similique impedit sequi velit, rerum in. Vitae repellat quisquam illo laudantium praesentium excepturi!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium  border-2 border-black">
                            How to pay?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus blanditiis sequi alias quisquam corrupti, doloremque fugiat! Quasi nihil at dignissimos error, nulla atque repellat reiciendis praesentium culpa laborum impedit?</p>
                        </div>
                    </div>
                </div>

                {/* animation */}
                
                <div className='w-[80%]' data-aos='fade-left'>
                    <Lottie classID='h-[200px]' animationData={question} />
                </div>
            </div>

        </div>
    );
};

export default Feedback;