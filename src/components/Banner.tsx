import IntroImage from "./ui/IntroImage"

const Banner = () => {
    const IntroData = [
        {
            image: 'https://images.unsplash.com/photo-1647712484146-64f644fab3e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'For Her',
            id: 1,
            gender: 'female'
        },
        {
            image: 'https://images.unsplash.com/photo-1651459200978-1120588fcc96?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'For Him',
            id: 2,
            gender:'male'
        }
    ]
    return (
        <div className="w-full grid grid-cols-1 gap-1 md:gap-0 md:grid-cols-2">
            {
                IntroData.map((data) => {
                    return <IntroImage key={data.id} image={data.image} text={data.text} gender={data.gender} />
                })
            }
        </div>
    )
}

export default Banner
