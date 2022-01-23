import { useState } from "react";

export default function LoginForm()
{
    const [user, setUser] = useState({
        email: "",
        password:"",
      });
    
      const [errors, setErrors] = useState({
        emailErrors: null,
        passwordErrors: null,
      });
    
      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });

        const emailRegex=/^[a-zA-Z]{3,}(@)[a-zA-Z]{3,}(.com)$/;
        const passwordRegex=/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    
        if (e.target.name === "email") {
            
            setErrors({
              ...errors,
              emailErrors:
                e.target.value.length == 0
                  ? "this field is required"
                  : !emailRegex.test(e.target.value)
                  ? "Enter Valid Email"
                  : null
            });
          };
        
        if (e.target.name === "password") {
            console.log(user.password)
            setErrors({
              ...errors,
              passwordErrors:
                e.target.value.length == 0
                  ? "this field is required"
                  :e.target.value.length<8
                  ? "password can't be less than 8 characters"
                  : !passwordRegex.test(e.target.value)
                  ? "Enter Valid Password"
                  : null
            });
          };
      };
      const handleSubmit=(e)=>{
          e.preventDefault();
      }
    return(
        <div className="contaier row mt-5 mx-5">
            <div className="col-7 mx-auto">
              <h2 className="mb-5">Login Form</h2>
            <form>
           
        <div className="mb-3 row">
          <label forhtml="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className={`form-control ${errors.emailErrors?'border-danger':''}`}
              id="inputEmail"
              value={user.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.emailErrors}</small>
          </div>
        </div>
        
        <div className="mb-3 row">
          <label forhtml="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className={`form-control ${errors.passwordErrors?'border-danger':''}`}
              id="inputPassword"
              value={user.password}
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.passwordErrors}</small>
          </div>
        </div>
        
        <button className="btn btn-danger px-4 py-2 " onClick={(e)=>handleSubmit(e)}>Register</button>
        </form>
        </div>
        </div>
    )
}