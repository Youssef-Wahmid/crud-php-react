import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    <nav>
        <ul style={{display:'flex', justifyContent:'space-between',listStyle:'none',width:'350px'}}>
            
            <li><Link to={'users'} >List Of users</Link> </li>
            <li><Link to={'users/create'}>Create New Users</Link> </li>
        </ul>
    </nav>
  )
}
