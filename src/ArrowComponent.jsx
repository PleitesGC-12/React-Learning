// To use props we use destructuring
const ArrowComponent = ({title, subtitle}) => {
    console.log(title);
    console.log(subtitle);

    return (

        <div>
            <h1>{title} </h1>
            <h2>{subtitle + 1}</h2>
        </div>
    )
}

export default ArrowComponent;