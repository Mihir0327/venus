import React from "react";
import { Footer, Header } from ".";

export default function () {
  return (
    <>

      <Header />

      <div className="container my-24 px-6 mx-auto">

        <section className="mb-32  lg:p-[2rem] bg-blend-lighten bg-white bg-no-repeat bg-[length:100%_100%]  rounded-2xl text-gray-800">
          <div className="flex justify-center lg:mt-[1rem] mb-[2rem] lg:mb-[2rem]">
            <div className="text-center lg:max-w-3xl md:max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold pt-[4rem] px-6">Contact us</h2>
              <p className="mb-10 lg:text-lg font-medium pt-[1.2rem]">Have any questions? We'd love to hear from you!</p>
            </div>
          </div>

          <div className="lg:flex">
            <div className="shrink-0 lg:ml-[3rem] mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
              <form >
                <div className="form-group mb-6">
                  <input type="text" className="form-control block
            w-full
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2  border-grey-300
            rounded-lg
            transition
            ease-in-out
            m-0
            p-[1rem]
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Name" />
                </div>
                <div className="form-group mb-6">
                  <input type="text" className="form-control block
            w-full
            p-[1rem]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2  border-grey-300
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Phone No." />
                </div>
                <div className="form-group mb-6">
                  <input type="email" className="form-control block
            w-full
            p-[1rem]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2  border-grey-300
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address" />
                </div>
                <div className="form-group mb-6">
                  <textarea className="
            form-control
            block
            w-full
            p-[1rem]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2  border-grey-300
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "  rows="3" placeholder="Message"></textarea>
                </div>
                <div className="form-group form-check mb-6">
                  <input id="checked-checkbox1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label className="ml-[1.2rem] text-lg font-medium text-black-800" >Send me a copy of this
                    message</label>
                </div>
                <button type="submit" className="
          w-full
          p-[1rem]
          bg-[#4a6021] 
          text-white
          font-medium
          text-lg
          leading-tight
          uppercase
          rounded-lg
          shadow-md
          hover:bg-[#2f773a] hover:shadow-lg

          active:bg-[#1b992e] active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
              </form>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-[100%]  lg:w-[57.2%]">
              <div className="flex flex-wrap flex-col  lg:ml-[9rem] ">
                <div className="mb-12 grow-0 lg:bg-[#e0e0e0] rounded-2xl shrink-0 basis-auto w-full py-3 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0 pt-2">
                      <div className="p-2 bg-[#4a6021]  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                          className="p-1 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold text-xl ">Contact Us</p>
                      <p className="text-black font-medium">glysis@software.com</p>
                      <p className="text-black font-medium">+91 9328180802</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 lg:bg-[#e0e0e0]  rounded-2xl shrink-0 basis-auto w-full py-3 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0 pt-2">
                      <div className=" bg-[#4a6021]  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                          className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                          <path fill="currentColor"
                            d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold text-xl">Sales questions</p>
                      <p className="text-black font-medium">sales@example.com</p>
                      <p className="text-black font-medium">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 lg:bg-[#e0e0e0] rounded-2xl grow-0 shrink-0 basis-auto w-full py-3 px-3 lg:px-6">
                  <div className="flex align-start">
                    <div className="shrink-0 pt-2">
                      <div className="bg-[#4a6021]  p-2 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                          className=" text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path fill="currentColor"
                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" /> <path fill="currentColor" d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="font-bold text-xl">Office Address</p>
                      <p className="text-black font-medium">A-304,Mondeal Heights</p>
                      <p className="text-black font-medium">+91 9773261259</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-[1] w-full">
          <div className="box">
            <iframe className="mx-auto rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1836.0123770995563!2d72.5066965!3d23.0228633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85a36b4f2bed%3A0x7956d55ffa14893c!2sGlysis%20Software%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676465996954!5m2!1sen!2sin" width="100%" height="400px"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
</div>
<Footer />
</>
);
}