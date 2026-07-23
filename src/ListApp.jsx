import {useState} from "react"

const Item = ({name, viewed}) => {
    return (
        <li>{name} {viewed ? "✅" : "❌"}</li>
    )
}


// practicing map
const ListApp = () => {
    
    let sectionList = [
        {name:"Installations" ,viewed: true},
        {name:"How to use vite", viewed: true},
        {name:"Components" ,viewed: true},
        {name:"Variables" ,viewed: true},
        {name:"Props" ,viewed: true},
        {name:"Events" ,viewed: true},
        {name:"UseState" ,viewed: true},
        {name:"Redux" , viewed: false},
        {name:"CustomHooks" ,viewed: false}
    ]

    const [array, setArray] = useState(sectionList)

    const addTask = () => {
        setArray([...array, {name: "new", viewed: false} ])
    }

    return (
        <div>
            <h1>List of studied topics:</h1>
            <ol>
                {/* In this part we render every item for the list */}
                {array.map(item => <Item key={item.name} name={item.name} viewed={item.viewed}></Item>)}
            </ol>

            <button onClick={addTask}>Add task</button>
        </div>
    )

    
}


export default ListApp;