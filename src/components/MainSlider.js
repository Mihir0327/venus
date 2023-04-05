import React from "react";
import { Carousel } from "react-bootstrap";

let MainSlider = () => {

    const dataSlider = [{
        title: 'LOW PRICES AND BEST QUALITY',
        subTitle: 'RESTATURENT FURNITURE',
        describe: 'Visual appeal is a very important aspect of any food business. With our furnishing services customers get neat polished and classy restaurant furniture that perfectly compliments the quality of their food',
        link: '',
        img: 'image/slider-img-1.png'
    }, {
        title: 'YOUR PERFECT ROOM',
        subTitle: 'HOTEL ROOM FURNITURE',
        describe: 'We are a leading Hotel Furniture Manufacturer in Noida, India offers superior quality Restaurant, Cafe, Hotel ,Outdoor & furniture at affordable pricing.',
        link: '',
        img: 'image/slider-img-2.png'
    }, {
        title: 'WOOD CREATIVITY',
        subTitle: 'VINTAGE FURNITURE',
        describe: 'Find out the best sources for buying antiques and vintage furniture at Venuscreatives, alongside some pro tips for online antiquing from Venuscreatives.',
        link: '',
        img: 'image/slider-img-3.png'
    }]



    return (
        <>

<section class="banner overflow-hidden">
        <div class="slider" id="banner-slider">
            <Carousel >

                {dataSlider.map((data, index) => {
                    return <Carousel.Item key={index} interval={2000}  >
                        <div class="slide relative ">
                            <img src={data.img} alt=""  class="w-[100%] h-[500px]  lg:h-[60%] " />
                            <div
                                class="innerbox absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-white z-[2] ">
                                <div class="title text-[15px] font-[200] mb-[20px] text-center md:text-[22px] md:mb-[15px] lg:text-[30px] lg:mb-[10px] md:font-[300]">
                                   {data.title}
                                </div>
                                <div class="bold-title text-[25px] font-[500] mb-[10px] text-center md:text-[20px] md:mb-[15px] lg:text-[30px] lg:font-[600] lg:mb-[20px] ">
                                   {data.subTitle}
                                </div>
                                <div class=" text-center text-[12px] sm:font[100]  md:font[200] md:text-[15px] lg:text-[18px] lg:font-[400]">
                                    <p>{data.describe}</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                })}

            </Carousel>
            </div>
    </section>
        </>
    )
}

export default MainSlider   