import React from "react";
import { useNavigate } from "react-router-dom";

const categoryObj = [
  {
    divImage: "image/interior-img-1.jpg",
    title: "Seating Furniture",
    id:1,
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "Mordern Sofa Set"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "MORDEN 3 SEATER SOFA"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "MORDEN SOFA CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "SECTIONAL SOFA"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "WINGCHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "CHALISE LOUNGE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "OTTOMON"
    }],
    api: "/seatingFurniture",
  },
  {
    divImage: "image/interior-img-2.jpg",
    title: "Dining Furniture",
    id:2,
    api: "/diningFurniture",
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "Morden Dining Furniture"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "MORDEN DINING CHAIR"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "BUFFET CABINATE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "CROCKERY UNIT"
    },
  ]
  },
  {
    divImage: "image/interior-img-3.jpg",
    title: "Hotel Furniture",
    api: "/hotelFurniture",
    id:3,
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "HOTEL BED"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "LUGGAGE BAG"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "FRIDGE RACK"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "HOTEL STUDY TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "HOTEL STUDY CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "HOTEL ROOM CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "HOTEL SIDE TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "HOTEL COFFEE TABLE"
    }],
  },
  {
    divImage: "image/interior-img-1.jpg",
    title: "Bedroom Furniture",
    api: "/bedroomFurniture",
    id:4,
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "BEDSIDE TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "BED BENCH"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "BOOK CASES"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "LCD UNIT"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "DRESSER"
    },
    ],
  },
  {
    divImage: "image/interior-img-2.jpg",
    title: "Restaurant Furniture",
    api: "/restaurantFurniture",
    id:5,
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "RESTAURENT CHAIR"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "RESTAURANT SOFA"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "RESTAURANT TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "BAR CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "BAR STOOL"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "LOUNGE CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "CAFE TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "LAUNGE SOFA"
    }],
  },
  {
    divImage: "image/interior-img-3.jpg",
    title: "Table Furniture",
    api: "/tableFurniture",
    id:6,
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "COFFEE TABLE "
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "END TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "CONSOLE TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "STUDY TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "NEST TABLE"
    },
    ],
  },
  {
    divImage: "image/interior-img-1.jpg",
    title: "Vintage Furniture",
    api: "/vintageFurniture",
    id:7,
    submenu:[{
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE SOFA"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE CHAIRS"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE DINING SET"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE DINING TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE BED"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE BED SIDE TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE COFFEE TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE CONSOLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE END TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE STUDY TABLE"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE BED BENCH"
    },
    {
      menuImg : "image/interior-img-2.jpg",
      subtitle : "VINTAGE CABINET"
    }],
  },
];

export default function Category() {
  const Navigate = useNavigate();
  return (
    <>
     
      <div className="bg-slate-200 container sm:mb-5 lg:mb-10">
        <div className="mx-auto max-w-2xl  px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h1 className="text-center mb-5 font-bold text-4xl">
              Furniture Categories
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-y-8 lg:gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {categoryObj.map((data) => {
              return (
                <div onClick={() => Navigate(data.api)} className="hover:border-2  hover:border-[#4a6021] p-2 rounded-md ">
                  <a href="#" className="">
                    <div className="aspect-w-1 h-[857] w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={data.divImage}
                        alt=""
                        className="h-full w-full object-cover object-center " 
                      />
                    </div>
                    <div className="flex mt-2 py-2 items-center justify-between   bg-slate-200 rounded-sm">
                      <h3 className="text-sm ml-2 font-medium items-center">
                        {data.title}
                      </h3>
                      <button
                        onClick={() => Navigate(data.api)}
                        className="transition ease-in-out delay-150 hover:scale-110 duration-300 mr-2 text-sm  bg-[#4a6021] rounded-sm p-1 text-white"
                      >
                        View More
                      </button>
                    </div>
                  </a>
                </div>
              );
            })}

            {/* <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a> */}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}