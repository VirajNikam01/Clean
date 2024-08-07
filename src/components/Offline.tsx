import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NoInternet from '../assets/NoInternet.mp4'

const Offline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const navigate = useNavigate()



    window.addEventListener('online', () => {
        setIsOnline(navigator.onLine)

    })

    useEffect(() => {
        if (isOnline) {
            navigate('/')
        }
    }, [isOnline])


    return (
        <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center">
            <video src={NoInternet} autoPlay muted loop className="w-[60%] md:w-[30%]"></video>
            <h1 className="text-3xl font-semibold text-black my-4">Disconnected?</h1>
            <p className="text-slate-600 text-center font-medium text-xl px-2">Please check your network and internet service</p>
        </div>
    )
}

export default Offline
