import {useState, useEffect} from "react"

const UserList = ({ endPoint }) => {
    
    const [data, setData] = useState([])
        
    const fetchData = async () => {
                
        try {
            // On the first render it calls the endpoint users to fetch the data
            // On the second render it calls the endpoint comments when you click the button
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            setData(data)
    
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect( () => {
        
        fetchData()

    }, [endPoint])

    return (
        <div>
            <ul>
                {endPoint == "users" ? data.map( item => <li key={item.id}>{item.name}</li>)
                                    : data.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
        </div>
    )
}

export default UserList