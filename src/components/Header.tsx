import MiniLoader from '../assets/mini-loader.svg'
import { useSelector } from "react-redux"
import { Tstore } from "../redux/store"
import { IoCartOutline } from "react-icons/io5";
import UserTextImage from "./ui/UserTextImage"
import NavLinks from "./ui/NavLinks"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useEffect, useState } from 'react';




const Header = () => {
    const [isBgVisible, setIsBgVisible] = useState(false)
    const isDataLoading = useSelector((store: Tstore) => store.user.isDataLoading)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => latest > 100 ? setIsBgVisible(true) : setIsBgVisible(false))






    return (
        <motion.div variants={{ visible: { backgroundColor: 'black' }, hidden: { backgroundColor: 'transparent' } }} animate={isBgVisible ? 'visible' : 'hidden'} transition={{ duration: 5}} className="w-full text-white select-none  min-h-5 h-fit flex justify-between items-center gap-2 sm:gap-0 py-5 flex-row px-3 sm:px-10 z-10">
            <NavLinks />
            <div className="user-data flex justify-center items-center gap-4">
                {isDataLoading ? <img className="w-5" src={MiniLoader} alt="" /> : <UserTextImage />}

                <div className="cart"><IoCartOutline className="sm:text-4xl text-3xl cursor-pointer hover:text-green-900 duration-300" /></div>
            </div>
        </motion.div>
    )
}

export default Header
