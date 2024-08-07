
const Footer = () => {
    return (
        <div className="min-h-[150px] border-t-2 mt-6 sm:p-10 grid grid-cols-2  gap-16 pt-10 px-6 sm:grid-cols-3 md:grid-cols-5 my-20">
            <div className="w-full  col-start-1 col-end-3">
                <div id="info" className="font-bold mb-16">
                    <h1 className="text-4xl mb-2">Monk.</h1>
                    <p className="text-xl">Statement of Lifestyle.</p>
                </div>

                <div id="touch">
                    <h1 className="font-medium mb-6">SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <form action="">
                        <input type="email" placeholder="Enter Email..." className="bg-slate-50 p-1 outline-none border-b-2" />
                        <button className="border rounded-lg px-10 py-1 hover:bg-purple-400 duration-200">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="">
                <h1 className='font-bold mb-4'>SHOP</h1>
                <ul>
                    <li>shirts</li>
                    <li>Pants</li>
                    <li>Sale</li>
                    <li>Jackets</li>
                    <li>Sport</li>
                </ul>
            </div>
            <div className="">
                <h1 className='font-bold mb-4'>Legal</h1>
                <ul>
                    <li>Terms</li>
                    <li>privacy</li>
                    <li>refund</li>
                    <li>Accessibility</li>
                    <li>cookie</li>
                </ul>
            </div>
            <div className="">
                <h1 className='font-bold mb-4'>HEADQUARTERS</h1>
                <p>At/Post Raigaon Taluka Jawali District Satara. <p>+91 452365214</p></p>
            </div>
        </div>
    )
}

export default Footer
