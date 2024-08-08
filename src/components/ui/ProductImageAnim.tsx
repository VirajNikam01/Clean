import { useNavigate } from "react-router-dom";






type ProductImageAnimProps = {
    src: string,
    hoverSrc: string,
    name: string,
    original_prize: number,
    selling_prize: number,
    id: number
}

const ProductImageAnim = ({ src, hoverSrc, name, original_prize, selling_prize, id }: ProductImageAnimProps) => {
    console.log(id);
    const navigate = useNavigate()
    const handelProductClick = () => {
        navigate(`/details/${id}`)
    }


    return (
        <div className="w-full relative h-full flex items-center justify-center border border-slate-300 cursor-pointer ">
            <div className="w-full h-full">
                <div onClick={handelProductClick} className="w-full sm:min-h-[80%]">
                    <img
                        className="duration-200 w-full absolute top-0 left-0 hover:opacity-0"
                        src={src}
                        alt="Image"
                    />
                    <img
                        className="duration-200 w-full object-cover"
                        src={hoverSrc}
                        alt="Image"
                    />

                </div>
                <div className="p-5">
                    <div onClick={handelProductClick} className="details">
                        <h1 className="font-medium">{name}</h1>
                        <div>
                            <span className="line-through">₹ {original_prize} </span> <span className="ml-2 font-medium"> ₹{selling_prize}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductImageAnim;
