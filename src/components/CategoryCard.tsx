

type categoryCardProps = {
    src: string,
    hoverSrc: string,
    name: string
}

const CategoryCard = ({ src, name, hoverSrc }: categoryCardProps) => {
    return (
        <div className={` w-full h-full relative select-none cursor-pointer`} >
            <img src={src} className="w-full object-cover h-full absolute top-0 left-0 duration-300 hover:opacity-0" alt="" />
            <img className="w-full h-full object-cover" src={hoverSrc} alt="" />
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
                <div className="w-fit px-6 py-1 hover:drop-shadow-2xl sm:px-16 sm:py-2 border-2 hover:rounded-2xl"> <h1 className="sm:text-3xl text-xl font-semibold tracking-wider ">{name}</h1></div>
            </div>
        </div>
    )
}

export default CategoryCard
