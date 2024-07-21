import MiniLoader from '../assets/mini-loader.svg'
import Logo from '../assets/logo.png'
import { useSelector } from "react-redux"
import { Tstore } from "../redux/store"
import { SlHome } from "react-icons/sl";
import { BiCartAdd } from "react-icons/bi";
import UserTextImage from "./ui/UserTextImage"
import NavLinks from "./ui/NavLinks"



const Header = () => {
    const isDataLoading = useSelector((store: Tstore) => store.user.isDataLoading)




    return (
        <div className="w-full select-none fixed top-0 min-h-5 h-fit flex justify-between items-center gap-2 sm:gap-0 py-5 flex-row px-3 sm:px-10 ">
            <NavLinks />
            <div className="user-data flex justify-center items-center gap-4">
                {isDataLoading ? <img className="w-5" src={MiniLoader} alt="" /> : <UserTextImage />}

                <div className="cart"><BiCartAdd className="text-4xl cursor-pointer hover:text-green-900 duration-300" /></div>
            </div>
        </div>
    )
}

export default Header
