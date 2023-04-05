 import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 1000
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        
    };
    return(
      <section className="story-display">
      <div className="overflow-hidden">
        <div className="inner-box row">
          <div className="title col-md-3 bg-black p-[20px] pl-[40px]">
            <h2 className="text-[30px] font-[600]   my-[25px] text-[#4a6021]">OUR PROJECT</h2>
            <p className="text-[#858585]">Our team is widely known for the highest quality of the products we
              provide. You can rely on us
              whether you need a cabinet or furniture for your kitchen.</p>
          </div>    
<div className="story-slider col-md-9 p-0 " id="story-slider">
    <Slider {...settings} >
    
              <div className="item  relative">
                <img src="image/project-img-1.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Gunpowder Bar & Kitchen</h3>
                  <h4 className="text-[18px] text-white">Ahmednagar</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-2.jpg" alt="" />
                  <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                    <h3 className="text-[25px] text-[600] text-white mb-[10px]">Bean and Basil</h3>
                    <h4 className="text-[18px] text-white">Noida</h4>
                  </div>
                </div>
              <div className="item relative">
                <img src="image/project-img-3.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Treenz Hotels</h3>
                  <h4 className="text-[18px] text-white">Gantok</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-4.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Hotel Sagar Palace</h3>
                  <h4 className="text-[18px] text-white">Baraut</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-5.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">City Food</h3>
                  <h4 className="text-[18px] text-white">Ashok Nagar M.P.</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-6.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Beyond Temptation</h3>
                  <h4 className="text-[18px] text-white">Noida</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-1.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Gunpowder Bar & Kitchen</h3>
                  <h4 className="text-[18px] text-white">Ahmednagar</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-2.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Bean and Basil</h3>
                  <h4 className="text-[18px] text-white">Noida</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-3.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Treenz Hotels</h3>
                  <h4 className="text-[18px] text-white">Gantok</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-4.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Hotel Sagar Palace</h3>
                  <h4 className="text-[18px] text-white">Baraut</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-5.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">City Food</h3>
                  <h4 className="text-[18px] text-white">Ashok Nagar M.P.</h4>
                </div>
              </div>
              <div className="item  relative">
                <img src="image/project-img-6.jpg" alt="" />
                <div className="story-title absolute left-0 bottom-[-30%] p-[15px] bg-[#00000070] w-full">
                  <h3 className="text-[25px] text-[600] text-white mb-[10px]">Beyond Temptation</h3>
                  <h4 className="text-[18px] text-white">Noida</h4>
                </div>
          </div>
            
    </Slider>
     </div>
     </div>
        </div>
      </section>
    );
  }
}