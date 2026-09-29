import {useState, useEffect} from "react"
import UserList from "./components/UserList"

const UsersApp = () => {

    const [endpoint, setEndpoint] = useState("users")
    
    const handleFetch = () => {
        setEndpoint("comments")
    }
    
    return (
        
        <div>
            <h1>Users List</h1>
            <UserList endPoint={endpoint}></UserList>
            <button onClick={handleFetch}>Calling the API</button>
        </div>

    )
}

export default UsersApp