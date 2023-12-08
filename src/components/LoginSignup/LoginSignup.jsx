import React, { useState } from 'react'
import "./LoginSignup.css"

import mail_icon from '../assets/mail.png'
import password_icon from '../assets/password.png'
import person_icon from "../assets/person.png"


export const LoginSignup = () => {
    const[action , newAction] = useState("signup") ; 
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <div className="icon">
                    <img src= {person_icon }  alt=""  />
                </div>
                <input  type="text"  placeholder='name'  />
            </div>}
            
            <div className="input">
                <div className="icon">
                    <img src= {mail_icon}  alt="" />
                </div>
                
                <input  type="email" placeholder='email' />
            </div>
            <div className="input">
                <div className="icon">
                    <img src= {password_icon }  alt=""  />
                </div>
                
                <input  type="password" placeholder = "password" />
            </div>
        </div>
        {action === "signup"? <div></div>:<div className="forgot-password">forgot password?  <span>click here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="signup"?"submit grey": "submit"} onClick= {()=>{newAction("Login")}} >Login</div>
            <div className={action==="Login"? "submit grey": "submit"} onClick= {()=> {newAction("signup")}}>signup</div>
        </div>
        {action=== "signup"? <div></div>:<div className="noaccount">Don't have an account? Please <span onClick={()=>{newAction("signup")}}>signup</span> </div> }
        

    </div>
  )
}
