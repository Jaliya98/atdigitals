import React from "react";
import HomeBG from "../../assets/main-img.png"
import Services from "./Services";
import "./Services.css"

const backgroundImageStyle = {
    backgroundImage: `url("${HomeBG}")`,
};

const HomePage = () => {
    return (
        <>
            <div>
                <div className=" bg-contain bg-no-repeat mt-20 h-[60rem] lg:mt-0 lg:h-[85rem]" style={backgroundImageStyle}>
                </div>
                <div className="content">
                <div class="flex w-full lg:w-2/3 -mt-[87rem]">
                    <div class="relative bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] z-10 mt-[22rem] -ml-12 overflow-hidden shadow-lg md:left-16 md:top-16 lg:ml-0">
                        <div class="flex flex-col p-4 md:p-6">
                            <div className="heading">
                                <h1 class="mb-2 font-semibold font-['Inter'] text-[2rem] text-white tracking-widest">We Crush Your <br /> Competitors, Goals, And <br /> Sales Records - Without <br /> the B.S</h1>
                            </div>
                        </div>
                        <div className="button">
                            <div class="pl-6 mb-6">
                                <button
                                    class="middle none center rounded-lg bg-[#F28D35] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 "
                                    data-ripple-light="true"
                                >
                                    Get Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
               
            </div>

            <div class = "mt-24">
                <Services />
            </div>

        </>

    )
}

export default HomePage;