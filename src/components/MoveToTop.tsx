import { useEffect } from "react"

type MoveToTopProps = {
    children: React.ReactNode
}
const MoveToTop = ({ children }: MoveToTopProps) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <div className="w-full h-full ">
            {children}
        </div>
    )
}

export default MoveToTop
