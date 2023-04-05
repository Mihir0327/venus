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

<section className="banner relative">
  
        <div className="reltive" id="service-slider">
            <Carousel fade >

                {dataSlider.map((data, index) => {
                    return <Carousel.Item key={index} interval={2000}  >
                        <div className="slide relative  ">
                            <img src={data.slideImg} alt="" class=" w-[100%] h-[500px]  lg:h-[40rem] " />
                            <div
                                className="innerbox absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-white z-[2] ">
                                <div className="title text-2xl font-semibold  text-center  md:text-4xl lg:text-5xl ">
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