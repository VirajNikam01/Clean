import { useNavigate } from "react-router-dom"

const ShopButton = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/shop')} className="text-lg py-2 px-5 border-4 font-bold rounded-md border-black hover:bg-transparent hover:border-white text-white bg-black  duration-500 ">
            Shop Now
        </button>
    )
}

export default ShopButton
