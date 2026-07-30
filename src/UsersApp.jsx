import {useState, useEffect} from "react"

const UsersApp = () => {

    const [users, setUsers] = useState([])
    
    const fetchUsers = async () => {
            
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        
        fetchUsers()

    }, [])
    
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map( (user) => <li key={user.id}>{user.name}</li> )}
            </ul>
        </div>
    )
}

export default UsersApp