import { useNavigate, useParams } from "react-router-dom"
import ClothInfo from "../components/ClothInfo"
import { newInDetails } from "../utils/data"
import { useEffect, useMemo, useState } from "react"
import Footer from "../components/Footer"
import MoveToTopProps from '../components/MoveToTop'
import Header from "../components/Header"
import { IoIosArrowBack } from "react-icons/io";


const ClothDetails = () => {
    const [productData, setProductData] = useState({ src: '', prize: 0 })
    const { id } = useParams()

    const navigate = useNavigate()

    const product = useMemo(() => {
        return newInDetails.filter((product) => {
            return product.id.toString() === id
        })[0]
    }, [])

    useEffect(() => {
        setProductData({ src: product.src, prize: product.selling_prize })
    }, [])

    const changeImage = (e: any) => {
        setProductData({ ...productData, src: e.target.src })
    }



    return (
        <MoveToTopProps>
            <div className="w-full bg-black">
                <Header />
            </div>
            <div className="m-3 sm:m-4">
                <button onClick={() => navigate(-1)} className="border-2 border-black p-1 rounded-full"><IoIosArrowBack className="sm:text-3xl" /></button>

            </div>

            <div className="px-3 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 ">
                <div className=" sm:justify-self-center	flex gap-5">
                    <div className="similar-images border-2 w-32 p-2 h-full flex flex-col justify-evenly overflow-y-auto">
                        <div className="box w-full">
                            <img onClick={(e) => changeImage(e)} className="w-full cursor-pointer hover:rounded-xl" src={product.hoverSrc} alt="" />
                        </div>
                        <div className="box w-full">
                            <img onClick={(e) => changeImage(e)} className="w-full cursor-pointer hover:rounded-xl" src={product.src} alt="" />
                        </div>

                    </div>
                    <div className="image-container w-[300px]  md:w-[290px] md:h-[400px] relative overflow-hidden">
                        <img src={productData.src} alt="image" className="h-full w-full absolute top-0 left-0 opacity-0 duration-300  hover:opacity-100 cursor-zoom-in scale-[200%]" />
                        <img src={productData.src} alt="image" className="h-full w-full cursor-zoom-in " />
                    </div>
                </div>
                <ClothInfo product={product} prize={productData.prize} />
            </div>

            <Footer />
        </MoveToTopProps>
    )
}

export default ClothDetails
