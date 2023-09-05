import React,{useState} from 'react'
import { useNavigate  } from 'react-router-dom';



const UserLogin = () => {
  const [message, setMessage] = useState({ mess: "", type: "" });
  const navigate = useNavigate();
  const [user,setUser]=useState({
    phone:"",
    password:"",
  })
  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log("user",user);
    const {phone,password}=user;
    if(phone==="8107775019" && password==="123"){
      console.log("Logged in user",user);
      setMessage({ mess: "Logged in user", type: "success" });
      setTimeout(() => {
        setMessage({ mess: "", type: "" }); 
        navigate ("/");
      },3000)
      
      
    }
    else{
      setMessage({ mess: "Login failed", type: "Failed" });
      setTimeout(() => {
        setMessage({ mess: "", type: "" }); 
      },3000)
    }
  }
  return (
    <div className="container-card">
       <div className="login-card">
            <form className="content" onSubmit={(e) => onSubmitLoginForm(e)}>
                
                <div className="box-login box-login-1"><h2>Login</h2></div>
                <div className="box-login box-login-2">
                  <input type="tel" className='input-login' name="" id="loginPhone" placeholder="Phone :"
                  onChange={(e)=>setUser({...user,phone:e.target.value})}
                   />
                </div>
                <div className="box-login box-login-3">
                  <input type="password" className='input-login' name="" id="loginPassword" placeholder="Password :"
                  onChange={(e)=>setUser({...user,password:e.target.value})}
                   />
                </div>
                <div className="box-login box-login-4">
                  <button type="submit" className='loginbutton'>Login</button> 
                </div>
               
            </form>
    </div>
    </div>
   
  )
}

export default UserLogin
