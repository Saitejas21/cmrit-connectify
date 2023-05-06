import "./login.css";
import { useRef } from "react";

export default function Login() {

const email = useRef();
const password = useRef();
const handleClick = (e) =>{
  e.preventDefault();
  console.log(email.current.value);
};

  return (
    <div className="login">
        
      <div className="loginWrapper">
        
        <div className="loginLeft">
          
        </div>
        <div className="loginRight">
        <h3 className="loginLogo">CMRIT Connectify</h3>
          <span className="loginDesc">
           The CMRITIANS Official Social Hub.
          </span>
          <form className="loginBox" onSubmit= { handleClick }>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
          </div>
        </div>
      
    </div>
  );
}