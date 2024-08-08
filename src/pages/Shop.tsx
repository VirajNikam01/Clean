import { useSearchParams } from "react-router-dom"
import Layout from "../components/Layout"
import { shopData } from "../utils/shopData";
import { useMemo } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";



const Shop = () => {

    const [searchParams,] = useSearchParams();
    const type = searchParams.get('v')

    const products = useMemo(() => {

        if (type === null) return shopData
        return shopData.filter((data) => {
            return data.category === type
        })
    }, [type, searchParams])






    return (
        <Layout>
            <h1 className="font-bold p-7 text-xl text-gray-600">For {type ? type?.toUpperCase() : 'Men & Women.'}</h1>
            <div className="flex gap-5 flex-wrap  px-6 justify-start mb-20">
                {products.map((product, index) => {
                    return <div key={index} className="w-[300px] "><Card product={product} /></div>
                })}
            </div>

            <Footer />
        </Layout>
    )
}

export default Shop
