import {useEffect, useState} from "react"

const UsersApp = () => {
    
    const [users, setUsers] = useState([])


    const fetchUsers = async () => {
        
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            //console.log(data)
            setUsers(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchUsers()
    }, [])

    
    return (
        <div>
            <h1>List of users</h1>
            <ul>
                {users.map( user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UsersApp