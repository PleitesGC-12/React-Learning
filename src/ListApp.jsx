import {useState} from "react"
import {AddTask} from "./components/AddTask"

const Items = ({name, viewed}) => {
    
    return (
        <li>{name} {viewed ? '✅' : '❌'}</li>
    )
}

let sectionList = [
    {id: 1, name:"Installations" ,viewed: true},
    {id: 2, name:"How to use vite", viewed: true},
    {id: 3, name:"Components" ,viewed: true},
    {id: 4, name:"Variables" ,viewed: true},
    {id: 5, name:"Props" ,viewed: true},
    {id: 6, name:"Events" ,viewed: true},
    {id: 7, name:"UseState" ,viewed: true},
    {id: 8, name:"Redux" , viewed: false},
    {id: 9, name:"CustomHooks" ,viewed: false}]


const ListApp = () => {
    
    const [array, setArray] = useState(sectionList)

    // this function is in charge of knowing how to add a task
    const onAddTask = (val) => { // val is the string received from the chld (AddTask component)
        
        if (val < 1) return

        // captures the string to be added on the list
        const submit = {
            id: array.length + 1,
            name: val,
            viewed: false
        }

        // to add it to the list we use setArray (modifying the state)
        setArray([...array, submit])
    }

    return (
        <div>

            <h1>List of studied topics</h1>
            
            <AddTask addTask={onAddTask}/>
            
            <ol>
                {array.map( (item) => <Items key={item.id} name={item.name} viewed={item.viewed}></Items>)}
            </ol>
        </div>
               
    )
}

export default ListApp;