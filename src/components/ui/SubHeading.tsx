
type SubHeadingProps = {
    title: string,
    style: React.CSSProperties
}

const SubHeading = ({ title, style }: SubHeadingProps) => {
    return (
        <h1 style={style} className="text-3xl text-teal-200 font-bold">
            {title}<span className="text-red-700 font-extrabold text-4xl">.</span>
        </h1>
    )
}

export default SubHeading
