import { Link, NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../assets/logo.png'
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Tstore } from "../../redux/store";
import { closeNavbar, toogle } from "../../redux/navbarSlice";



const NavLinks = () => {
    const openNav = useSelector((store: Tstore) => store.navbar.isNavbarOpen)
    const dispatch = useDispatch()



    const toggleNavbar = () => {
        dispatch(toogle())
    }

    const close = () => {
        dispatch(closeNavbar())
    }
    useEffect(() => {
        dispatch(closeNavbar())
    }, [])


    return (
        <div className="">
            <div className="category-links hidden items-center justify-center gap-5 sm:gap-10 sm:flex  ">
                <div className="main-logo">
                    <NavLink to={'/'}> <img className="invert-[1] w-20" src={Logo} alt="" /></NavLink>
                </div>
                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/shop'}>store</NavLink>
                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/premium'}>premium</NavLink>
                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/sale'}>sale</NavLink>
            </div>

            <div className="sm:hidden ">
                <RxHamburgerMenu className="text-3xl cursor-pointer duration-300 hover:text-slate-600" onClick={toggleNavbar} />
            </div>


            {openNav && <div onClick={close} className="w-full cursor-pointer z-10  h-screen fixed top-0 right-0 bg-black/50 backdrop-blur-sm"></div>}
            <div className={`w-full h-screen fixed top-0 left-0  text-black z-20  transform duration-500  ${!openNav ? '-translate-x-[100vw]' : ''}`}>
                <div className={`h-screen w-72 duration-500 relative px-3 bg-white top-0 left-0`}>
                    <RxCross2 className="absolute right-5 top-8 text-3xl cursor-pointer" onClick={close} />

                    <div className="h-full w-full  flex flex-col justify-between">
                        <div className="">
                            <div className="main-logo py-8">
                                <Link to={'/'}> <img className=" w-20" src={Logo} alt="" /></Link>
                            </div>

                            <div className="flex gap-4 flex-col text-2xl">
                                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/'}>Home</NavLink>
                                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/shop'}>store</NavLink>
                                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/premium'}>premium</NavLink>
                                <NavLink style={({ isActive }) => isActive ? { color: 'skyblue', fontWeight: 'bold' } : { color: 'inherit' }} to={'/sale'}>sale</NavLink>
                            </div>
                        </div>

                        <div className=" mb-28 flex flex-col gap-6 items-start">
                            <button className="bg-slate-50 text-black font-medium min-w-full py-1 rounded-md">Cart</button>
                            <button className="bg-slate-50 text-black font-medium min-w-full py-1 rounded-md">Wishlist</button>
                            <button className="bg-slate-50 text-black font-medium min-w-full py-1 rounded-md">Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavLinks
