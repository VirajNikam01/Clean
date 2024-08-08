import AllCategory from "../components/AllCategory"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NewCollection from "../components/NewCollection"

const LandingPage = () => {




    return (
        <div className="">
            <div className="fixed top-0 z-20 w-full"><Header /></div>
            <Banner />
            <NewCollection />
            <AllCategory />
            <Footer />
        </div>
    )
}

export default LandingPage
