import {  useEffect, useState } from "react"
import './list.css'
export const Liste = () => {

  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost/back/api/users/index.php')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setUsers(data)
    })
  },[])

  const disp = ()=>{
    return users.map(u=><tr key={u.id}>
      <td>{u.id} </td>
      <td>{u.name} </td>
      <td>{u.email} </td>
      <td>{u.phone} </td>
    </tr> )
  }

  return (
    <div>
      
    <table  id="userData">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {disp()}
        </tbody>
    </table>
    </div>
  )
}
