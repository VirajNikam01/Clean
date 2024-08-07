
type TintroTextProps = {
    text: string
}
const IntroText = ({ text }: TintroTextProps) => {
    return (
        <div className="">
            <h1 className="text-4xl sm:text-5xl font-bold inline-block px-10 py-2 border-2 border-whites text-white text-center mb-4">
                {text}
            </h1>
        </div>
    )
}

export default IntroText
