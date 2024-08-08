import { useNavigate } from "react-router-dom";


type CardProps = {
    product: {
        src: string;
        hoverSrc: string;
        name: string;
        original_prize: number;
        selling_prize: number;
        id: number;
        type: string;
        description: string;
        category: string;
    }
}

const Card = ({ product }: CardProps) => {

    const navigate = useNavigate()

    const openProductDetails = () => {
        navigate(`/details/${product.id}`)
    }


    return (
        <div onClick={openProductDetails} className="border border-slate-600 rounded-xl cursor-pointer grid grid-cols-1 p-1">
            <div className="img h-48 mb-3">
                <img className="rounded-lg h-full w-full object-cover object-center" src={product.src} alt="" />
            </div>
            <div className="details leading-tight">
                <h2 className="name font-medium">{product.name}</h2>
                <p className="info text-sm text-slate-700">{product.description.substring(0, 8)}...</p>
                <h1>$123.23</h1>
                <p>Free Delivary</p>
            </div>
        </div>
    )
}

export default Card
