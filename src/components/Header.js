import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { AboutUs, Header } from ".";
import Select from 'react-select';
import { Navigate, useNavigate } from 'react-router-dom';

const Menus = [
  {
    mainMenuName: 'Home',
    megaMenu: false,
    subMenu: []
  },

  {
    mainMenuName: 'About Us',
    megaMenu: false,
    subMenu: []
  },
  {
    mainMenuName: 'Furniture',
    megaMenu: true,
    subMenu: [
      {
        F_Type: 'Seating Furniture',
        fun: "showSeatingMenu",
        content: [
          {
            nameContent: 'Morden Sofaset',
            url: "www.google.com",
          },
          {
            nameContent: 'Morden 3 Seater Sofa',
            url: "#0",
          },
          {
            nameContent: 'Morden Sofa Chairs',
            url: "#0",
          },
          {
            nameContent: 'Sectional sofa',
            url: "#0",
          },
          {
            nameContent: 'Wing Chairs',
            url: "#0",
          },
          {
            nameContent: 'Chalise Lounge',
            url: "#0",
          },
          {
            nameContent: 'Ottomon',
            url: "#0",
          },
        ]
      },
      {
        F_Type: 'Dining Furniture',
        fun: "showDiningMenu",
        content: [
          {
            nameContent: 'Morden Dining Set',
            url: "#0",
          },
          {
            nameContent: 'Morden Dining Chairs',
            url: "#0",
          },
          {
            nameContent: 'Buffet Cabinet',
            url: "#0",
          },
          {
            nameContent: 'Crockery Unit',
            url: "#0",
          }
        ]
      },
      {
        F_Type: 'Hotel Furniture',
        fun: "showHotelMenu",
        content: [
          {
            nameContent: ' Hotel Bed',
            url: "#0",
          },
          {
            nameContent: 'Luggage Rack ',
            url: "#0",
          },
          {
            nameContent: 'Fridge Rack',
            url: "#0",
          },
          {
            nameContent: 'Hotel study Table',
            url: "#0",
          },
          {
            nameContent: 'Hotel study Chairs',
            url: "#0",
          },
          {
            nameContent: 'Hotel Room Chairs',
            url: "#0",
          },
          {
            nameContent: 'Hotel Coffee Table',
            url: "#0",
          },
          {
            nameContent: 'Hotel Side Table',
            url: "#0",
          },
        ]
      },
      {
        F_Type: 'Bedroom Furniture',
        fun: "showBedroomMenu",
        content: [
          {
            nameContent: 'Bed Side Table',
            url: "#0",
          },
          {
            nameContent: 'Bed Bench',
            url: "#0",
          },
          {
            nameContent: 'Book Cases',
            url: "#0",
          },
          {
            nameContent: 'LCD Unit',
            url: "#0",
          },
          {
            nameContent: 'Dresser',
            url: "#0",
          }
        ]
      },
      {
        F_Type: 'Restaurant Furniture',
        fun: "showRestaurantMenu",
        content: [
          {
            nameContent: 'Restaurant Chair',
            url: "#0",
          },
          {
            nameContent: 'Restaurant Sofa ',
            url: "#0",
          },
          {
            nameContent: 'Restaurant Table',
            url: "#0",
          },
          {
            nameContent: 'Bar Chairs',
            url: "#0",
          },
          {
            nameContent: 'Bar Stool',
            url: "#0",
          },
          {
            nameContent: 'Lounge Chairs',
            url: "#0",
          },
          {
            nameContent: 'Lounge Sofa',
            url: "#0",
          },
          {
            nameContent: 'Cafe Table',
            url: "#0",
          },
        ]
      },
      {
        F_Type: 'Table Furniture',
        fun: "showTableMenu",
        content: [
          {
            nameContent: 'Coffee Table',
            url: "#0",
          },
          {
            nameContent: 'End Table',
            url: "#0",
          },
          {
            nameContent: 'Console Table',
            url: "#0",
          },
          {
            nameContent: 'Study Table',
            url: "#0",
          },
          {
            nameContent: 'Nest Table',
            url: "#0",
          }
        ]
      },
      {
        F_Type: 'Vintage Furniture',
        fun: "showVintageMenu",
        content: [
          {
            nameContent: 'Vintage Sofa',
            url: "#0",
          },
          {
            nameContent: 'Vintage Chairs ',
            url: "#0",
          },
          {
            nameContent: 'Vintage Dining Set',
            url: "#0",
          },
          {
            nameContent: 'Vintage Dining Chairs',
            url: "#0",
          },
          {
            nameContent: 'Vintage Dining Table',
            url: "#0",
          },
          {
            nameContent: 'Vintage Bed',
            url: "#0",
          },
          {
            nameContent: 'Vintage Bed Side Table',
            url: "#0",
          },
          {
            nameContent: 'Vintage Cabinet',
            url: "#0",
          },
          {
            nameContent: 'Vintage Coffee Table',
            url: "#0",
          },
          {
            nameContent: 'Vintage Console',
            url: "#0",
          },
          {
            nameContent: 'Vintage End Table',
            url: "#0",
          },
          {
            nameContent: 'Vintage Study Table',
            url: "#0",
          },
          {
            nameContent: 'Vintage Bed Bench',
            url: "#0",
          },
        ]
      },
    ]
  },


]

let DesktopMenu = () => {

  const SeatingSubItem = ["MORDEN SOFASET", "MORDEN 3 SEATER SOFA", "MORDEN SOFA CHAIRS", "SECTIONAL SOFA", "WINGCHAIRS", "CHALISE LOUNGE", "OTTOMON"]



  const [open, setOpen] = useState(false)
  const [showMenufurniture, setShowMenu] = useState(false)
  const [selectFType, setFType] = useState(0)
  const [selectMenu, setSelectedMenu] = useState(0)

  const onClickMenu = () => {
    setOpen(!open);
    setShowMenu(false);
  }
  const showMenu = () => {
    setShowMenu(!showMenufurniture);
    // console.log("clicked");

  }
  const selectMenuFun = (index) => {
    setSelectedMenu(index);
  }
 
  let selectOptions = [
    { value: 0, label: 'Seating Furniture' },
    { value: 1, label: 'Dining Furniture' },
    { value: 2, label: 'Hotel Furniture' },
    { value: 3, label: 'Bedroom Furniture' },
    { value: 4, label: 'Restaurant Furniture' },
    { value: 5, label: 'Table Furniture' },
    { value: 6, label: 'Vintage Furniture' },
  ]


  const handleOnChange = (e) => {
    const eventValue = e.value;
    setFType(eventValue);  
  }
 const Navigate = useNavigate()

  return (
    <nav className="px-4 py-2   xl:px-[2.75rem] xl:py-[0.5rem] w-auto top-0 left-0  ">

      <div className="relative sm:px-6 lg:pl-[6rem]">
        <div className="flex items-center mr-2 justify-between">
            <div className="flex flex-shrink-0 items-center ">
              <a href="/" className=" "><img className="flex inset-x-0 left-0 h-14 md:h-14 lg:h-auto" src="image/logo.png" alt="" /></a>
              {/* <a href="index.html"><img className="hidden  h-8 w-auto lg:block" src="image/logo.png" alt="logo" /></a> */}
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden  ">
            {/* <!-- Mobile menu button--> */}
            <button onClick={onClickMenu} type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              {open ?   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> 
              </svg> : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              }  
            </button>
          </div>
          <div className=" items-center justify-end sm:items-stretch sm:justify-end">
            <div className="hidden  sm:ml-6 sm:block">
              <div className="flex whitespace-nowrap md:space-x-1 lg:space-x-3">

                <a href="#" onClick={()=> Navigate('/')} className=" text-black-300 px-1 lg:px-3 font-[800] py-2 rounded-md text-sm " aria-current="page">Home</a>

                <a href="#" onClick={()=> Navigate('/aboutus')} className="text-black-300 px-1 font-[800] lg:px-3 py-2 rounded-md text-sm ">About Us</a>

                <div className="mega-menu flex">
                  <a href="#" onClick={showMenu} className="text-black-300 font-[800] px-1  lg:px-3 py-2 rounded-md text-sm ">Furniture</a>
                  {/* <img src="image/dropdown-img.jpg" alt="" */}
                  {
                   showMenufurniture ? <div className="dropdwon-content container  w-[70%] bg-white absolute  top-20  left-[50%] -translate-x-[50%] z-[5]  rounded overflow-hidden">

                      <div className="w-auto">

                        <div className="flex w-auto  items-center justify-between h-auto">
                          {
                            Menus.filter(i => i.megaMenu)[0].subMenu.map((data, index) => {

                              return <button key={index} onClick={() => selectMenuFun(index)} className="text-[10px] md:px-1 whitespace-normal xl:whitespace-nowrap lg:text-[0.8rem] 2xl:text-[1rem] 2xl:px-[0.6rem] mt-[0.5rem] 2xl:ml-[0.4rem] font-[600] text-[#4a6021] mb-[5px] xl:mb-[10px]">{data.F_Type}</button>
                            })
                          }
                        </div>
                        <ul>
                {
                  Menus.filter(i => i.megaMenu)[0].subMenu[selectMenu].content.map((data, index) => {

                    return <li key={index} className="pl-6 xl:mb-[5px]">
                      <a href={data.url}
                        className="text-[8px] lg:text-[0.8rem] text-[#777777] font-[400]">{data.nameContent}
                      </a>
                    </li>

                  })
                }
              </ul>
                      </div>
                    </div> : ''
                  }
                </div>

                <a href="#"  onClick={()=> Navigate('/interiorservice')} className="text-black-300 font-[800] px-1 lg:px-4 py-2 rounded-md text-sm ">Interior Service</a>
                <a href="#" className="text-black-300 font-[800] px-1 lg:px-4 py-2 rounded-md text-sm ">Blog</a>
                <a href="#" className="text-black-300 font-[800] px-1 lg:px-4 py-2 rounded-md text-sm ">Project</a>
                <a href="#" onClick={()=>Navigate('/contactus')} className="text-black-300 font-[800] px-1 lg:px-4 py-2 rounded-md text-sm ">Contact us</a>
                
                  <a href="/" id="button"
                    className=" text-[#fff] px-[20px] py-[10px] ml-8 border rounded sm:hidden xl:block  bg-[#4a6021] 
                    "><i
                      className="fa-solid fa-phone mr-[10px] "></i>333.278.06622</a> 
             

              </div>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            
          </div> */}
        </div>
      </div>

      <div className=" w-full  rounded  shadow-lg ring-1 ring-black ring-opacity-5 sm:hidden relative" id="mobile-menu">
        {!open ? '' : <div className="space-y-1 px-2 pt-2 pb-3 absolute rounded-lg bg-[#f8f8f7] z-20 w-[100%] mt-3">
          <a href="#" onClick={()=> Navigate('/')} className=" text-black-500 block px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Home</a>
                          
          <a href="#" onClick={()=> Navigate('/aboutus')} className="text-black-500  block px-3 py-2 rounded-md text-lg font-medium" >About Us</a>

          <div className="mega-menu relative" >
            <a href="#" onClick={showMenu} className="text-black-500 block px-3 py-2 rounded-md text-lg font-medium  " >Furniture</a>


          <div className="block rounded-lg bg-[#c5c2c2]">

              { !showMenufurniture ?'':
              
              <div>
                <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={(e)=>handleOnChange(e)} className="text-lg font-[500]  mb-[0.5rem] bg-transparent "/>
                 
                  <ul>
                    {
                      Menus.filter(i => i.megaMenu)[0].subMenu[selectFType].content.map((data, index) => {

                        return <li key={index} className="mb-[5px] ">
                          <a href={data.url}
                            className="text-[12px] text-base pl-3 text-[#444343] font-[400]">{data.nameContent}
                          </a>
                        </li>
                      })
                    }
                  </ul>
              </div> 

              }

            </div>


          </div>

          <a href="#" onClick={()=>Navigate('/interiorservice')} className="text-black-500  block px-3 py-2 rounded-md text-lg font-medium" >Interior Service</a>
          <a href="#" className="text-black-500  block px-3 py-2 rounded-md text-lg font-medium" >Blog</a>
          <a href="#" className="text-black-500  block px-3 py-2 rounded-md text-lg font-medium" >Project</a>
          <a href="#"  onClick={()=>Navigate('/contactus')} className="text-black-500  block px-3 py-2 rounded-md text-lg font-medium" >Contact us</a>
          <a href="/"
            className="flex w-full items-center justify-center rounded-xl shadow-md    text-[#fff] px-[20px] py-[10px] border  bg-[#4a6021] 
                  "><i
              className="font-medium text-base fa-solid fa-phone mr-[10px] "></i>333.278.06622</a>
        </div>}
      </div>
    </nav>

  )
}

export default DesktopMenu