import {useState} from "react"
import {AddTask} from "./components/AddTask"

const Items = ({name, viewed}) => {
    
    return (
        <li>{name} {viewed ? '✅' : '❌'}</li>
    )
}

let sectionList = [
    {name:"Installations" ,viewed: true},
    {name:"How to use vite", viewed: true},
    {name:"Components" ,viewed: true},
    {name:"Variables" ,viewed: true},
    {name:"Props" ,viewed: true},
    {name:"Events" ,viewed: true},
    {name:"UseState" ,viewed: true},
    {name:"Redux" , viewed: false},
    {name:"CustomHooks" ,viewed: false}]


const ListApp = () => {
    
    const [array, setArray] = useState(sectionList)


    return (
        <div>

            <h1>List of studied topics</h1>
            
            <AddTask addTask={setArray}/>
            
            <ol>
                {array.map( (item) => <Items key={item.name} name={item.name} viewed={item.viewed}></Items>)}
            </ol>
        </div>
               
    )
}

export default ListApp;