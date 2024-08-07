import CategoryCard from "./CategoryCard"

const AllCategory = () => {
    const AllCategoryDetails = [
        {
            src: "https://images.unsplash.com/photo-1657483796601-1d388f06dea7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            hoverSrc: "https://images.unsplash.com/photo-1662923449314-7342599c21f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'Casual',
            id: 100

        },
        {
            src: "https://images.unsplash.com/photo-1661804037866-be45def75dd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            hoverSrc: "https://images.unsplash.com/photo-1660936319295-5ee259599951?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'Sport',
            id: 102
        },
        {
            src: "https://images.unsplash.com/photo-1649768723140-b289499710f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU0fHxjbG90aHN8ZW58MHx8MHx8fDA%3D",
            hoverSrc: "https://images.unsplash.com/photo-1662476244921-5b9935cadebc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'Jackets',
            id: 103
        },

    ]

    return (
        <div className="w-full">
            <h1 className="tracking-wider font-semibold text-lg p-10">SHOP BY CATEGORY</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:px-5">
                {AllCategoryDetails.map((category) => {
                    return <CategoryCard key={category.id} src={category.src} hoverSrc={category.hoverSrc} name={category.type} />
                })}
            </div>
        </div>
    )
}

export default AllCategory
