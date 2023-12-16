import React from "react";
import FooterLogo from "../../assets/Logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer class="bg-[#6B3CC9]" aria-labelledby="footer-heading">
                <div class="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div class="space-y-8 xl:col-span-1">
                            <img class="h-34 w-[12rem] mt-4" alt="footerlogo" src={FooterLogo} />
                            <p class="mt-2 text-[16px] font-['Lato']  text-white">Your goal is our target. Not anything in between.We use online marketing platforms and tools to achieve single objective - your business results</p>
                        </div>
                        <div class="grid mt-12 xl:mt-0 xl:col-span-2">
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div class="lg:pl-20 ">
                                    <h1 class="pl-4 font-semibold tracking-wider font-['Inter']  text-white uppercase">Our Technologies</h1>
                                    <ul role="list" class="mt-4 space-y-4">
                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> ReactJS </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Gatsby </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> NextJS </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> NodeJS</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> GraphQL</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Laravel</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-12 md:mt-0">
                                    <h1 class="pl-4 font-semibold tracking-wider font-['Inter']  text-white uppercase">Our Services</h1>
                                    <ul role="list" class="mt-4 space-y-4">
                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Social Media Marketing </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Web & Mobile App Development </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Data & Analytics </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Google Marketing Solutions </a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-sm font-normal font-['Inter']  text-white hover:text-gray-200"> Search Engine Optimization </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center" >
                <hr class="my-3 md:my-6 border-gray-400 w-[40rem]" />
                </div>

                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center mb-3 font-['Inter'] ">
                        <a href="#" class="text-lg text-white py-1">
                            Privacy Policy | Terms & Conditions
                        
                        </a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;