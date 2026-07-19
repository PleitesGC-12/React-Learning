const Items = ({name, viewed}) => {
    return (
        <li>{name} {viewed ? '✅' : '❌'}</li>
    )
}

const ListApp = () => {
    return (
        <div>
            <h1>List of studied topics:</h1>
            <ol>
                <Items name="Installations" viewed={true}></Items>
                <Items name="How to use vite" viewed={true}></Items>
                <Items name="Components" viewed={true}></Items>
                <Items name="Variables" viewed={true}></Items>
                <Items name="Props" viewed={true}></Items>
                <Items name="Events" viewed={true}></Items>
                <Items name="UseState" viewed={true}></Items>
                <Items name="Redux" viewed={false}></Items>
                <Items name="CustomHooks" viewed={false}></Items>
            </ol>
        </div>
    )
}

export default ListApp;