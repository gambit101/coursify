import { FaHotTubPerson, FaLightbulb, FaBriefcase } from "react-icons/fa6";

const Values = () => {
    return (
        <div className="bg-[#003153] mt-16">
            <h1 className="text-5xl text-[#faefaa] ml-20 pt-10">Lets Talk About Values</h1>
            <div className="grid grid-cols-2 px-20 gap-10 mt-10">
                <div className="p-5 bg-[#faefaa] rounded-xl">
                    <h2 className="text-2xl font-semibold">Teamwork:</h2>
                    <p >Splendid work often needs the co-operation of different teammates with diverse perspectives & ideas, rather than a lone genius. Therefore, we always try to retain a good environment of efficient teamwork attitude for carrying out projects by ensuring a fair workload distribution.</p>
                </div>
                <div className="p-5 bg-[#faefaa] rounded-xl">
                    <h2 className="text-2xl font-semibold">We Value Our People:</h2>
                    <p >Splendid work often needs the co-operation of different teammates with diverse perspectives & ideas, rather than a lone genius. Therefore, we always try to retain a good environment of efficient teamwork attitude for carrying out projects by ensuring a fair workload distribution.</p>
                </div>
                <div className="p-5 bg-[#faefaa] rounded-xl">
                    <h2 className="text-2xl font-semibold">Continuous Learning:</h2>
                    <p >Splendid work often needs the co-operation of different teammates with diverse perspectives & ideas, rather than a lone genius. Therefore, we always try to retain a good environment of efficient teamwork attitude for carrying out projects by ensuring a fair workload distribution.</p>
                </div>
                <div className="p-5 bg-[#faefaa] rounded-xl">
                    <h2 className="text-2xl font-semibold">Freedom:</h2>
                    <p >Splendid work often needs the co-operation of different teammates with diverse perspectives & ideas, rather than a lone genius. Therefore, we always try to retain a good environment of efficient teamwork attitude for carrying out projects by ensuring a fair workload distribution.</p>
                </div>
                <div className="p-5 bg-[#faefaa] rounded-xl">
                    <h2 className="text-2xl font-semibold">Grit - No Ego:</h2>
                    <p >Splendid work often needs the co-operation of different teammates with diverse perspectives & ideas, rather than a lone genius. Therefore, we always try to retain a good environment of efficient teamwork attitude for carrying out projects by ensuring a fair workload distribution.</p>
                </div>
                <div className="p-5 bg-[#faefaa] rounded-xl">
                    <h2 className="text-2xl font-semibold">Teamwork:</h2>
                    <p >Splendid work often needs the co-operation of different teammates with diverse perspectives & ideas, rather than a lone genius. Therefore, we always try to retain a good environment of efficient teamwork attitude for carrying out projects by ensuring a fair workload distribution.</p>
                </div>

            </div>
            <h1 className="text-5xl text-[#faefaa] ml-20 pt-10">Perks & Benifits</h1>
            <div className="grid grid-cols-3 px-20 gap-10 mt-10 pb-10">
                <div className="text-white">
                    <FaHotTubPerson className="text-5xl bg-[#faefaa] text-[#003153] rounded-xl mb-4 p-2"></FaHotTubPerson>
                    <h2 className="text-2xl font-semibold mb-4">Training & Development</h2>
                    <p >We make training & development plans and arrange courses to enhance the skills for our employees professional and personal development.</p>
                </div>
                <div className="text-white">
                    <FaLightbulb className="text-5xl bg-[#faefaa] text-[#003153] rounded-xl mb-4 p-2"></FaLightbulb>
                    <h2 className="text-2xl font-semibold mb-4">Express yourself or ideas</h2>
                    <p >You are always welcome to share your ideas and opinions on solutions, research, and working procedures or outside the work topics in our affable office environment.</p>
                </div>
                <div className="text-white">
                    <FaBriefcase className="text-5xl bg-[#faefaa] text-[#003153] rounded-xl mb-4 p-2"></FaBriefcase>
                    <h2 className="text-2xl font-semibold mb-4">Work Environment</h2>
                    <p >We always maintain an innovative, amiable, safe as well as collaborative office environment where we can all enjoy working.</p>
                </div>
            </div>
        </div>
    );
};

export default Values;