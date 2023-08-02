import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className="bg-[#faefaa] mx-20">

            {/* slider 1 */}

            <Marquee direction="right">
                <div className="flex gap-10">
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712877d277e62be_Group-1.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287cd407e62bd_Group%2047.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712872b6c7e62ad_g3707.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712874df97e6332_Vector-5.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f1797e6321_Vector-4.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128746107e6310_Vector-3.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712873dc17e62ee_Vector-1.svg" alt="" /><img src="" alt="" />
                </div>
            </Marquee>

            {/* slider 2 */}

            <Marquee className="mt-16">
                <div className="flex gap-10">
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712877d277e62be_Group-1.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287cd407e62bd_Group%2047.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712872b6c7e62ad_g3707.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712874df97e6332_Vector-5.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f1797e6321_Vector-4.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128746107e6310_Vector-3.svg" alt="" />
                    <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712873dc17e62ee_Vector-1.svg" alt="" /><img src="" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;