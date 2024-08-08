import ProductImageAnim from "./ui/ProductImageAnim"
import { newInDetails } from "../utils/data"

const NewCollection = () => {




    return (
        <div className="">
            <div className="p-10 flex justify-between items-center text-lg ">
                <h1 className=" font-semibold tracking-widest ">NEW IN</h1>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 items-center justify-center">

                {
                    newInDetails.map((product) => {
                        return <ProductImageAnim src={product.src} hoverSrc={product.hoverSrc} id={product.id} name={product.name} original_prize={product.original_prize} selling_prize={product.selling_prize} />

                    })
                }


            </div>
        </div>
    )
}

export default NewCollection
