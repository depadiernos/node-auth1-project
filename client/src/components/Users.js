import React, {useState, useEffect} from "react"
import { GetUsers } from "../utils/api"

export default function(){
  const [users, setUsers] = useState({})
  useEffect(()=>{
    const getUsers = async () => {
      const newUsers = await GetUsers()
      setUsers(newUsers)
    }
    getUsers()
  }, [])
  console.log(users)
  return(
    <div>
      {/* {users.map((user)=>{
        return <div>user</div>
      })} */}
      </div>
  )
}