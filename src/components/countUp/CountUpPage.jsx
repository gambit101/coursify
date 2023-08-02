import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react';

const CountUpPage = () => {

    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='bg-[#faefaa] py-14'>

                <h1 className=" text-7xl font-bold text-center pt-5">
                    Wellfounds <br />
                    10 of 10 in 2022
                </h1>
                <p className='text-2xl text-center pt-2 font-bold'>10 groundbreaking teams across 10 trending industries</p>

            </div>
            <div className='flex justify-evenly gap-10 py-10 bg-[#faefaa]'>
                <div className='border-2 p-10 border-black rounded-xl' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-5xl font-bold text-center' start={0} end={130} duration={2} delay={0}></CountUp>} <span className='text-5xl font-bold'>K</span> <br /><span className='text-3xl font-bold'>Tech Jobs</span>
                </div>
                <div className='border-2 p-10 border-black rounded-xl' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-5xl font-bold text-center' start={0} end={600000} duration={2} delay={0}></CountUp>} <span className='text-5xl font-bold'>+</span> <br /><span className='text-3xl font-bold'>Matches Made
                    </span>
                </div>
                <div className='border-2 p-10 border-black rounded-xl text-center' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-5xl font-bold text-center' start={0} end={8} duration={2} delay={0}></CountUp>} <span className='text-5xl font-bold'>M+</span> <br /><span className='text-3xl font-bold'>Startup-ready</span>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default CountUpPage;