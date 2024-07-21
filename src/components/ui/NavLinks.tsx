import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/logo.png'


const NavLinks = () => {
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

            <div className="sm:hidden">
                <RxHamburgerMenu className="text-3xl" />
            </div>
        </div>
    )
}

export default NavLinks
