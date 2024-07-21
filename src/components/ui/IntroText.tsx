
type TintroTextProps = {
    text: string
}
const IntroText = ({ text }: TintroTextProps) => {
    return (
        <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center my-5">
            Ready to <b className="font-extrabold">{text}</b>
        </h1>
    )
}

export default IntroText
