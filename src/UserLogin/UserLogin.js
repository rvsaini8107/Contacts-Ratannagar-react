import React from 'react'


const UserLogin = () => {
  return (
    <div className="container-card">
       <div class="login-card">
            <form class="content">
                
                <div className="box-login box-login-1"><h2>Login</h2></div>
                <div className="box-login box-login-2">
                  <input type="tel" className='input-login' name="" id="loginPhone" placeholder="Phone :" />
                </div>
                <div className="box-login box-login-3">
                  <input type="password" className='input-login' name="" id="loginPassword" placeholder="Password :" />
                </div>
                <div className="box-login box-login-4">
                  <button className='loginbutton'>Login</button> 
                </div>
               
            </form>
    </div>
    </div>
   
  )
}

export default UserLogin
