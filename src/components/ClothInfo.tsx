
type TproductProps = {
    product: {
        src: string;
        hoverSrc: string;
        name: string;
        original_prize: number;
        selling_prize: number;
        id: number;
        type: string;
        description: string;
    }
    prize:number
}
const ClothInfo = ({ product, prize }: TproductProps) => {


    console.log(product, "Inside");

    return (
        <div className="">
            <h1 className="font-semibold text-xl">{product.name}</h1>
            <div className=" flex gap-5 tracking-wider font-medium">
                <p className="line-through">₹{product.original_prize}</p>

                <span>₹{prize}</span></div>
            <p className="leading-tight text-slate-700 text-sm mb-7">{product.description}
            </p>
            <div className="form">
                {/* {size} */}
                <label className="block font-bold select-none" htmlFor="">SIZE</label>
                <select className="max-w-96 w-full min-w-20 border-2 p-1 " onChange={(e) => console.log(e.target.value, ":Event")} name="size" id="">
                    <option className="p-10" value="" hidden>Select</option>
                    <option className="p-10" value="small">Small</option>
                    <option className="p-10" value="medium">medium</option>
                    <option className="p-10" value="large">Large</option>
                    <option className="p-10" value="extraLarge">Extra Large</option>
                </select>

                <div className="btns w-full flex flex-col sm:flex-row my-6 gap-4">
                <button className="bg-black text-white py-2 font-medium w-full border-2 border-black hover:bg-transparent hover:text-black duration-200">Add to Cart</button>
                <button className="bg-black text-white py-2 font-medium w-full border-2 border-black hover:bg-transparent hover:text-black duration-200">Buy Now</button>

                </div>
            </div>
        </div>
    )
}

export default ClothInfo
