import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../assets/logo.png'
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Tstore } from "../../redux/store";
import { toogle } from "../../redux/navbarSlice";



const NavLinks = () => {
    const openNav = useSelector((store: Tstore) => store.navbar.isNavbarOpen)
    const dispatch = useDispatch()

    const toggleNavbar = () => {
        dispatch(toogle())
    }


    return (
        <div className="">
            <div className="category-links hidden items-center justify-center gap-5 sm:flex  ">
                <div className="main-logo">
                    <img className="dsrk:invert-[1] w-20" src={Logo} alt="" />
                </div>
                <Link to={'/'}>store</Link>
                <Link to={'/'}>premium</Link>
                <Link to={'/'}>sale</Link>
            </div>

            <div className="sm:hidden ">
                <RxHamburgerMenu className="text-3xl cursor-pointer duration-300 hover:text-slate-600" onClick={toggleNavbar} />
            </div>

            {<div className={`w-full h-screen fixed top-0 left-0 z-10 text-white  ${!openNav ? 'hidden' : 'inline-block'}`}>
                <div className={`h-screen w-52 duration-500 transform ${openNav ? '' : '-translate-x-52'}  relative pl-3  bg-black/50 backdrop-blur-sm top-0 left-0 z-10`}>
                    <RxCross2 className="absolute right-5 top-8 text-3xl cursor-pointer" onClick={toggleNavbar} />

                    <div className="main-logo py-8">
                        <img className="invert-[1] w-20" src={Logo} alt="" />
                    </div>

                    <div className="flex gap-4 flex-col text-2xl">
                        <Link to={'/'}>store</Link>
                        <Link to={'/'}>premium</Link>
                        <Link to={'/'}>sale</Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default NavLinks
