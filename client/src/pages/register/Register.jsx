import "./register.css";

export default function Register() {
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
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Login to your Account
            </button>
          </div>
          </div>
        </div>
      
    </div>
  );
}