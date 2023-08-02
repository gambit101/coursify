import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Blog = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="mt-16">
            <div className="flex justify-between mr-20" data-aos='zoom-in'>
                <h1 className="text-4xl mb-10 font-bold ml-20 pt-10">From the blog</h1>
                <button className="btn rounded-xl bg-[#003153] text-[#faefaa] mt-4 border-none font-bold">More Posts</button>
            </div>
            <div className="mx-20 grid grid-cols-2 gap-5">
                <div className="border-2 border-blue-900 rounded-xl" data-aos='zoom-in'>
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287d71a7e6361_Frame%2520297-min-p-800.jpeg" alt="" />
                    <div className="p-7">
                        <h3 className="text-xl font-semibold">JOB COLLECTION</h3>
                        <h1 className="text-3xl font-bold mt-4">20 Women-Led Startups Expanding Their Remote Teams in 2022</h1>
                        <p className="mt-2">It is no surprise by now that women make great leaders. In the US alone, women-led businesses generated more than 1.8 trillion dollars...</p>
                        <button className="btn rounded-xl bg-[#003153] text-[#faefaa] mt-4 border-none font-bold">Read more</button>
                    </div>
                </div>
                <div className="border-2 border-blue-900 rounded-xl" data-aos='zoom-in'>
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128719aa7e6360_Frame%2520296-min-p-800.jpeg" alt="" />
                    <div className="p-7">
                        <h3 className="text-xl font-semibold">BLOG POST</h3>
                        <h1 className="text-3xl font-bold mt-4">30 Questions to Ask Before Joining a Startup</h1>
                        <p className="mt-2">You are trying to evaluate the company while still impressing your interviewers, and that balance can be tricky...</p>
                        <button className="btn rounded-xl bg-[#003153] text-[#faefaa] mt-4 border-none font-bold">Read more</button>
                    </div>
                </div>
                <div className="border-2 border-blue-900 rounded-xl" data-aos='zoom-in'>
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128724317e635f_Frame%2520295-min-p-800.jpeg" alt="" />
                    <div className="p-7">
                        <h3 className="text-xl font-semibold">JOB COLLECTION</h3>
                        <h1 className="text-3xl font-bold mt-4">19 Hot Crypto Startups Hiring Remotely in 2022</h1>
                        <p className="mt-2">Either Crypto has a great PR team, or the internet-based medium of exchange is truly taking the world by storm...</p>
                        <button className="btn rounded-xl bg-[#003153] text-[#faefaa] mt-4 border-none font-bold">Read more</button>
                    </div>
                </div>
                <div className="border-2 border-blue-900 rounded-xl" data-aos='zoom-in'>
                    <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712872b067e635c_Frame%2520292-min-p-800.jpeg" alt="" />
                    <div className="p-7">
                        <h3 className="text-xl font-semibold">JOB COLLECTION</h3>
                        <h1 className="text-3xl font-bold mt-4">20 Women-Led Startups Expanding Their Remote Teams in 2022</h1>
                        <p className="mt-2">It is no surprise by now that women make great leaders. In the US alone, women-led businesses generated more than 1.8 trillion dollars...</p>
                        <button className="btn rounded-xl bg-[#003153] text-[#faefaa] mt-4 border-none font-bold">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;