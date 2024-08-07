import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type TcheckInternetProps = {
    children: React.ReactNode
}
const CheckInternet = ({ children }: TcheckInternetProps) => {
    const navigate = useNavigate()


    useEffect(() => {

        window.addEventListener('offline', () => {
            console.log('working');

            navigate('/offline')

        })
    }, [])
    return children
}

export default CheckInternet
