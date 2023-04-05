import React from "react";
import Slider from "react-slick";

export default function InteriorSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings:{ slidesToShow: 1,
        slidesToScroll: 1,}
      },
    ]
  };

  const dataObj = [{
    title:"Restaurant Interior Design",
    slideImg : 'image/interior-img-1.jpg'
  },
{
  title:"Hotel Interior Design",
    slideImg : 'image/interior-img-2.jpg'
},
{
  title:'Home Interior Design',
  slideImg : 'image/interior-img-3.jpg'
},
{
  title:"Restaurant Interior Design",
  slideImg : 'image/interior-img-1.jpg'
},
{
title:"Hotel Interior Design",
  slideImg : 'image/interior-img-2.jpg'
},
{
title:'Home Interior Design',
slideImg : 'image/interior-img-3.jpg'
}
]
  


  return (
    <section className="container interior">
        <div className="title text-center">
          <h2 className="text-[25px] font-[700] mb-[5px] md:text-[35px]">INTERIOR IDEAS</h2>
          <p className="text-[#7a7979] text-[15px] mb-[20px] md:text-[20px]">Keeping Things Minimal</p>
        </div>
      <div className="interior-slider" id="interior-slider">
    <Slider {...settings}>

{

      dataObj.map((data) => {
        return <div className="p-3">
            <div className="box relative">
            <img src={data.slideImg} alt="" className="" />
            <div className="interior-details absolute  left-[30px] top-[30px] w-[80%]">
              <h2 className="text-[20px]  text-white">{data.title}</h2>
              
            </div>
            
          </div>
                     
          </div>
          
          
        })
        
      }

    </Slider>
     <div className="button w-max mx-auto pt-[60px] ">
            <a href="#" className="px-[15px] py-[8px] bg-[#4a6021] text-white font-[600] text-[17px]">View Store</a>
          </div>
             </div>
             </section>
  );
}