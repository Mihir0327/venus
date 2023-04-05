import React from "react";
import { Footer, Header, ServiceSlider, Property } from ".";


export default function () {
    return (
        <>

            <Header />
            <ServiceSlider />
            <section className="relative justify-center bg-[#474545] w-full h-full    overflow-hidden"  >

                <div className="flex justify-center" >
                    <div className=" "><h1 className="text-2xl text-white font-normal mt-5 flex mb-2 justify-center md:text-3xl lg:text-4xl ">WE PROVIDE THE BEST </h1>
                        <div className="flex  space-x-2 lg:space-x-1 justify-center">
                            <span className="text-white rounded-md bg-[#7e716c] pb-1 text-3xl md:text-3xl lg:text-4xl font-semibold px-[0.5rem] ">SERVICE </span><p className=" text-3xl md:text-3xl lg:text-4xl  text-white font-normal px-[o.5rem] ">EVER </p></div>
                        <div className="mb-[1rem] ">
                            <p className="text-center text-white text-sm mt-2 mb-4 md:text-xl ">START YOUR APPLICATION, REQUEST ADDITIONAL INFORMATION, OR SCHEDULE A CAMPUS VISIT TODAY!</p></div>
                    </div>
                </div>
            </section>
           <Property />

            <Footer />
        </>
    );
}