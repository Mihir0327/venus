import React,{Fragment,useState}from "react";


const detail = [
  {
    id:1,
    Image:"/image/interior-img-1.jpg",
    title:'Restaurant Interior Design'

  },
  {
    id:2,
    Image:"/image/interior-img-2.jpg",
    title:'Hotel Interior Design'

  },
  {
    id:3,
    Image:"/image/interior-img-3.jpg",
    title:'Home Interior Design'

  },
  {
    id:4,
    Image:"/image/kichen-img.jpg",
    title:'Kichen Interior Design'

  },
  {
    id:5,
    Image:"/image/wardrobe-img.jpg",
    title:'Wardrobe Interior Design'

  },
  {
    id:6,
    Image:"/image/balcony-img.jpg",
    title:'Balcony Interior Design'

  },
  {
    id:7,
    Image:"/image/living_room-img.jpg",
    title:'Living Room Interior Design'

  }, {
    id:8,
    Image:"/image/tv_unit.jpg",
    title:'TV Unit Interior Design'

  }, {
    id:9,
    Image:"/image/bathroom-img.jpg",
    title:'Bathroom Interior Design'

  },
  
]

const Cards = () => {


  return (
    <Fragment>
     
<section className="  pb-[4rem] ">
<div className="text-center text-5xl bg-[#95b5b6] py-[2rem] md:p-[2.5rem] font-semibold text-white">
  <h3>Popular Designs</h3>
</div>

<div className="container grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 pt-[2rem] ">

{
  detail.map((detail)=>{
    return(
     //
     <div className="h-"> 
        <div className="w-full   hover:scale-105 rounded-2xl mb-[2rem] shadow-lg  shadow-black overflow-hidden">
         


            <div className=" overflow-hidden w-full max-h-[500px] ">
              
              <img className=" align-middle " src={detail.Image} alt="" />
            </div>

            <div className="mb-[1.2rem] pt-[0.9rem]  text-xl font-semibold text-center">
              <h3>{detail.title}</h3>
             

              
            </div>

           

          
        </div>
      </div>

    )
  })
}


</div>


<div className="flex justify-center">
<button href="#" className="text-center  bg-[#4a6021]  tracking-tight hover:-tracking-normal p-[1rem] rounded-xl  text-md lg:text-2xl font-semibold  text-white  ">More Designs</button>
</div>
</section>



    </Fragment>
  );
}
export default Cards;