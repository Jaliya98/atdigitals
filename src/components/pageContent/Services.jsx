import React from "react";
import service from "../../assets/image 1.png"
import secondservice from "../../assets/image 2.png"
import "./Services.css"

const Services = () => {
    return (
        <>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="grid md:grid-cols-2">
                        <div className="service_image">
                            <img src={secondservice} alt="service1" class="h-[15rem] w-[25rem] lg:ml-32 object-cover object-center " />
                        </div>

                        <div class="md:pt-8">

                            <h1 class="mb-4 text-center text-2xl font-bold text-[#6B3CC9] font-['Inter'] sm:text-3xl md:mb-6 md:text-left">Web & Mobile App Development</h1>

                            <p class="mb-6 text-gray-500 font-['Inter'] text-center lg:text-left sm:text-lg md:mb-2">
                                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.                            </p>
                            <div class="ml-24 lg:pb-12 lg:ml-0 lg:mt-4">
                                <button
                                    class="middle none center rounded-lg bg-[#F28D35] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40"
                                    data-ripple-light="true"
                                >
                                    Learn more
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                    <div class="grid md:grid-cols-2">
                        <div class="md:order-2 service_image">
                            <img src={service} alt="service2" class="h-[15rem] w-[22rem] lg:ml-32 object-cover object-center" />
                        </div>

                        <div class="md:order-1 md:pt-8">
                            <h1 class="mb-4 text-center text-2xl font-bold text-[#6B3CC9] sm:text-3xl font-['Inter'] md:mb-6 md:text-left">Digital Strategy Consulting</h1>
                            <p class="mb-6 text-gray-500 font-['Inter'] text-center lg:text-left sm:text-lg md:mb-2">
                            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                            </p>
                            <div class="ml-24 lg:pb-12 lg:ml-0 lg:mt-4">
                                <button
                                    class="middle none center rounded-lg bg-[#F28D35] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40"
                                    data-ripple-light="true"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Services;