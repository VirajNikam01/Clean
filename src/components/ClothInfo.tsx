
const ClothInfo = () => {
    return (
        <div>
            <h1>The Revival Shirt</h1>
            <div>
                <p className="line-through">₹2,123.00</p>

                <span>₹1,592.25</span></div>
            <p>Vintage Revival shirt is perfect for layering
            </p>
            <div className="form">
                <label className="block font-bold select-none" htmlFor="">SIZE</label>
                <select className="w-96 border-2 p-1 " onChange={(e) => console.log(e.target.value, ":Event")} name="size" id="">
                    <option className="p-10" value="" hidden>Select</option>
                    <option className="p-10" value="small">Small</option>
                    <option className="p-10" value="medium">medium</option>
                    <option className="p-10" value="large">Large</option>
                    <option className="p-10" value="extraLarge">Extra Large</option>
                </select>
            </div>
        </div>
    )
}

export default ClothInfo
