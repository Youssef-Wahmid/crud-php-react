import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"

export const Lyout = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <div>
            <h1 style={{textAlign:'center'}}>Managment Userd</h1>
        <Nav/>
        <Outlet/>
        </div>
        
        
    </div>
  )
}
