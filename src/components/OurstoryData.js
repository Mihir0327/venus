import React  from "react";

export default function(){
    return(
        <section className="our-story relative mt-[40px] ">
        <div className="container-fluid">
          <div
            className="our-story-details w-[70%] absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
            <div className="title">
              <h2 className="text-[30px] font-[600] mb-[35px] md:text-[35px]">OUR STORY</h2>
            </div>
            <div className="mb-[20px]">
              <p>We believe in creativity as one of the major forces of progress. With this idea, we traveled
                throughout Italy to find exceptional artisans and bring their unique handcrafted objects to
                connoisseurs everywhere.</p>
            </div>
            <div className="button">
              <a href="#"
                className=" px-[20px] py-[10px] bg-transparent border border-white text-white font-[600] text-[15px] inline-block">Read
                full story</a>
            </div>
          </div>

        </div>
      </section>

    );
}