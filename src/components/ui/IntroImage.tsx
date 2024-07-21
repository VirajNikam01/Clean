import IntroText from "./IntroText"
import ShopButton from "./ShopButton"


type TintroImageProps = {
    image: string
    text: string
}
const IntroImage = ({ image, text }: TintroImageProps) => {
    return (
        <div className="w-full sm:h-[120vh]  relative text-center  ">
            <img className="w-full h-full  object-cover" src={image} alt="" />
            <div className=" absolute top-[50%] left-[50%] -translate-x-[50%]  w-full ">
                <IntroText text={text} />
                <ShopButton />
            </div>
        </div>
    )
}

export default IntroImage
