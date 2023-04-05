import React from "react";
import { Carousel } from "react-bootstrap";

let ServiceSlider = () => {

    const dataSlider = [{
        title:"Restaurant Interior Design",
        slideImg : "image/restaurant-img-bg1.jpg"
      },
    {
      title:"Hotel Interior Design",
        slideImg : "image/Hotel-img-bg1.jpeg"
    },
    {
      title:'Home Interior Design',
      slideImg : "image/home-img-bg1.jpeg"
    }]



    return (
        <>

<section className="banner ">
  
        <div className="" id="-slider">
            <Carousel >

                {dataSlider.map((data, index) => {
                    return <Carousel.Item key={index} interval={1000}  >
                        <div className="slide relative  ">
                            <img src={data.slideImg} alt="" class="w-[100%] h-[500px]  lg:h-[60%] " />
                            <div
                                className="innerbox absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-white z-[2] ">
                                <div className="title text-[15px] font-[200] mb-[20px] text-center md:text-[22px] md:mb-[15px] lg:text-[30px] lg:mb-[10px] md:font-[300]">
                                   {data.title}
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

export default ServiceSlider   