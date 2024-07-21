import IntroImage from "./ui/IntroImage"

const Banner = () => {
    const IntroData = [
        {
            image: 'https://static.wixstatic.com/media/a263fe_3fb51bddb356432d9329fe54bb42a87e~mv2.jpg/v1/fill/w_521,h_725,fp_0.50_0.30,q_85,usm_0.66_1.00_0.01,enc_auto/9b38ca_7fd278c921294ebea06992263cf8be16~mv2_edited.jpg',
            text: 'Ship'
        },
        {
            image: 'https://static.wixstatic.com/media/a263fe_b764816d40824206a29faa3cb71f8791~mv2.jpg/v1/fill/w_950,h_1126,fp_0.47_0.48,q_85,usm_0.66_1.00_0.01,enc_auto/9b38ca_e8743ff9e2e047969939206831230998~mv2%20(1)_edited.jpg',
            text : 'CUSTOMISE'
        }
    ]
    return (
        <div className="w-full grid grid-cols-1 gap-1 md:gap-0 md:grid-cols-2">
            {
                IntroData.map((data)=>{
                    return <IntroImage image= {data.image} text={data.text}/>
                })
            }
        </div>
    )
}

export default Banner
