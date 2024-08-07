import ProductImageAnim from "./ui/ProductImageAnim"

const NewCollection = () => {

    const newInDetails = [
        {
            src: "https://images.unsplash.com/photo-1647712481132-8b49c0b7b0d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            hoverSrc: 'https://images.unsplash.com/photo-1647712483127-edeafa41b68f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'The Revival Shirt',
            original_prize: 2123,
            selling_prize: 2123,
            id: 100

        },
        {
            src: "https://images.unsplash.com/photo-1604006852563-e8b846baca6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            hoverSrc: 'https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'The Evergreen Hoodie',
            original_prize: 2499,
            selling_prize: 2499,
            id: 102
        },
        {
            src: "https://images.unsplash.com/photo-1643762363659-b06da6b537d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            hoverSrc: 'https://images.unsplash.com/photo-1643762363707-03c155202546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
            name: 'The Bold Red Tee',
            original_prize: 999,
            selling_prize: 999,
            id: 103
        },
        {
            src: "https://images.unsplash.com/photo-1605675939029-5d97cdd2c2a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            hoverSrc: 'https://images.unsplash.com/photo-1589902732652-b82f717c696e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'The Sunshine Jacket',
            original_prize: 2999,
            selling_prize: 2999,
            id: 104
        },
    ]


    return (
        <div className="">
            <div className="p-10 flex justify-between text-lg ">
                <h1 className=" font-semibold tracking-widest ">NEW IN</h1>
                <button className="  border-2 px-10 py-2 inline-block hover:bg-purple-600 duration-300 hover:text-white font-medium">View All</button>
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
