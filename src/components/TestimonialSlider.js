import React from "react";
import Slider from "react-slick";

export default function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };

    return (
         <section className="testimonial my-[10%] lg:mt-[4%] lg:mb-[4%] ">
        <div className="container">
          <div className="title text-center">
            <h2 className="text-[30px] font-[700] mb-[5px]">TESTIMONIAL</h2>
            <p className="text-[#7a7979] text-[15px] mb-[20px]"> Clients Say</p>
          </div>
        <Slider {...settings} className="testimonial-slider" id="testimonial-slider">

            <div className="review mr-[40px] relative">
                <div className="inner-box border-[2px] rounded w-[90%] mx-auto px-[20px] py-[40px]">
                    <div className="massage text-center">
                        <i className="fa-solid fa-quote-left text-[40px] mb-[20px]"></i>
                        <p className="text-justify mb-[20px]">They’ve been incredibly helpful, responsive, and
                            knowledgeable and We will certainly
                            recommend their furniture services to all of our friends who are looking for the perfect
                            furniture!! And We do hope that we will be able to work together for any future house
                            moves and renovation projects, all the best!</p>
                        <div className="stare text-center text-[#4a6021] mb-[20px]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="profile text-center">
                        <img src="image/testimonial-profile.png" alt="" className="mx-auto w-[15%]" />
                        <h2 className="name">City Food</h2>
                        <p className="city">Delhi</p>
                    </div>
                </div>
            </div>
          
            <div className="review mr-[40px] relative">
                <div className="inner-box  border-[2px] rounded w-[90%] mx-auto px-[20px] py-[40px]">
                    <div className="massage text-center">
                        <i className="fa-solid fa-quote-left text-[40px] mb-[20px]"></i>
                        <p className="text-justify mb-[20px]">They’ve been incredibly helpful, responsive, and
                            knowledgeable and We will certainly
                            recommend their furniture services to all of our friends who are looking for the perfect
                            furniture!! And We do hope that we will be able to work together for any future house
                            moves and renovation projects, all the best!</p>
                        <div className="stare text-center text-[#4a6021] mb-[20px]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="profile text-center">
                        <img src="image/testimonial-profile.png" alt="" className="mx-auto w-[15%]" />
                        <h2 className="name">City Food</h2>
                        <p className="city">Delhi</p>
                    </div>
                </div>
            </div>
            <div className="review mr-[40px] relative">
                <div className="inner-box border-[2px] rounded w-[90%] mx-auto px-[20px] py-[40px]">
                    <div className="massage text-center">
                        <i className="fa-solid fa-quote-left text-[40px] mb-[20px]"></i>
                        <p className="text-justify mb-[20px]">They’ve been incredibly helpful, responsive, and
                            knowledgeable and We will certainly
                            recommend their furniture services to all of our friends who are looking for the perfect
                            furniture!! And We do hope that we will be able to work together for any future house
                            moves and renovation projects, all the best!</p>
                        <div className="stare text-center text-[#4a6021] mb-[20px]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="profile text-center">
                        <img src="image/testimonial-profile.png" alt="" className="mx-auto w-[15%]" />
                        <h2 className="name">City Food</h2>
                        <p className="city">Delhi</p>
                    </div>
                </div>
            </div>
            <div className="review mr-[40px] relative">
                <div className="inner-box  border-[2px] rounded w-[90%] mx-auto px-[20px] py-[40px]">
                    <div className="massage text-center">
                        <i className="fa-solid fa-quote-left text-[40px] mb-[20px]"></i>
                        <p className="text-justify mb-[20px]">They’ve been incredibly helpful, responsive, and
                            knowledgeable and We will certainly
                            recommend their furniture services to all of our friends who are looking for the perfect
                            furniture!! And We do hope that we will be able to work together for any future house
                            moves and renovation projects, all the best!</p>
                        <div className="stare text-center text-[#4a6021] mb-[20px]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="profile text-center">
                        <img src="image/testimonial-profile.png" alt="" className="mx-auto w-[15%]" />
                        <h2 className="name">City Food</h2>
                        <p className="city">Delhi</p>
                    </div>
                </div>
            </div>
            <div className="review mr-[40px] relative">
                <div className="inner-box border-[2px] rounded w-[90%] mx-auto px-[20px] py-[40px]">
                    <div className="massage text-center">
                        <i className="fa-solid fa-quote-left text-[40px] mb-[20px]"></i>
                        <p className="text-justify mb-[20px]">They’ve been incredibly helpful, responsive, and
                            knowledgeable and We will certainly
                            recommend their furniture services to all of our friends who are looking for the perfect
                            furniture!! And We do hope that we will be able to work together for any future house
                            moves and renovation projects, all the best!</p>
                        <div className="stare text-center text-[#4a6021] mb-[20px]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="profile text-center">
                        <img src="image/testimonial-profile.png" alt="" className="mx-auto w-[15%]" />
                        <h2 className="name">City Food</h2>
                        <p className="city">Delhi</p>
                    </div>
                </div>
            </div>
            <div className="review mr-[40px] relative">
                <div className="inner-box border-[2px] rounded w-[90%] mx-auto px-[20px] py-[40px]">
                    <div className="massage text-center">
                        <i className="fa-solid fa-quote-left text-[40px] mb-[20px]"></i>
                        <p className="text-justify mb-[20px]">They’ve been incredibly helpful, responsive, and
                            knowledgeable and We will certainly
                            recommend their furniture services to all of our friends who are looking for the perfect
                            furniture!! And We do hope that we will be able to work together for any future house
                            moves and renovation projects, all the best!</p>
                        <div className="stare text-center text-[#4a6021] mb-[20px]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="profile text-center">
                        <img src="image/testimonial-profile.png" alt="" className="mx-auto w-[15%]" />
                        <h2 className="name">City Food</h2>
                        <p className="city">Delhi</p>
                    </div>
                </div>
            </div>

        </Slider>
         </div>
      </section>
    );
}