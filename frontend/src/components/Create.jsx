import { useState } from 'react'
import './create.css'
import { useNavigate } from 'react-router-dom'
export const Create = () => {


  const navigate = useNavigate() ;
  const [dataForm,setDataForm] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
  })

  const [msg,setMsg] = useState({}) ;
  
  const handelChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setDataForm({...dataForm,[name]:value})
  }

  const handelSubmit=(e)=>{
    e.preventDefault( ) ;
    const url = 'http://localhost/back/api/users/create.php'
    fetch (url,{
      method:'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(dataForm),
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      setMsg(data)
    })
    navigate('/users')
  }
  return (
    <div className="create-user">

        <h1>Create new User </h1>
        {Object.keys(msg).length !== 0 && 
         msg.status === 'success' ? 
         <> 
          <h5 style={{backgroundColor:'#99ffdd' , padding:'15px 10px'}}>{msg.message} </h5>
         </> 
         :<> 
         <h5 style={{backgroundColor:'#f48aa0'}}>{msg.message} </h5>
        </> 
            
          
        }
        <form id="userDataForm" method='post' onSubmit={handelSubmit}>
          
            
            <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input type="text"  name="userName" required
                  value={dataForm.userName} onChange={handelChange}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="userEmail">Email</label>
                <input type="email"  name="userEmail" required
                  value={dataForm.userEmail} onChange={handelChange}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="userPhone">Phone</label>
                <input type="tel"  name="userPhone" required
                  value={dataForm.userPhone} onChange={handelChange}
                />
            </div>
            
            <button type="submit">Submit</button>
        </form>


      </div>
  )
}
