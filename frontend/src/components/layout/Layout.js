import React from 'react'
import Footer from './Footer'
import DesktopMenu from './Header'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  return (
    <div>
        <DesktopMenu/>
        <main>
        <ToastContainer/>
        {props.children}
        </main>
        <Footer/>

    </div>
  )
}

export default Layout