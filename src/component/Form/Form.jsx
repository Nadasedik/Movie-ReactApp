import { useState } from "react";

export default function Form()
{
    const [user, setUser] = useState({
        name:"",
        email: "",
        userName: "",
        password:"",
        confirmPassword:""
      });
    
      const [errors, setErrors] = useState({
        nameErrors: null,
        emailErrors: null,
        userNameErrors: null,
        passwordErrors: null,
        confirmPasswordErrors: null
      });
    
      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
        const nameRegex=/^[a-zA-Z]{3,}$/;
        const emailRegex=/^[a-zA-Z]{3,}(@)[a-zA-Z]{3,}(.com)$/;
        const userNameRegex=/^[a-zA-Z]{3,}[^\s]$/; //(?!\s)
        const passwordRegex=/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    
        if (e.target.name === "name") {
            
            setErrors({
              ...errors,
              nameErrors:
                e.target.value.length == 0
                  ? "this field is required"
                  : !nameRegex.test(e.target.value)
                  ? "Enter Valid Name"
                  : null
            });
          };
        
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
        
        if (e.target.name === "userName") {
            
          setErrors({
            ...errors,
            userNameErrors:
              e.target.value.length == 0
                ? "this field is required"
                : !userNameRegex.test(e.target.value)
                ? "Enter Valid User Name"
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
          if (e.target.name === "confirmPassword") {
            //console.log(user.password)
            setErrors({
              ...errors,
              confirmPasswordErrors:
                e.target.value.length == 0
                  ? "this field is required"
                  : !(e.target.value == user.password)
                  ? " Password Don't Match"
                  : null
            });
          };
      };
      const handleSubmit=(e)=>{
          e.preventDefault();
      }
    return(
        <div className="contaier mt-5 mx-5">
          <h2 className="mb-5 text-center">Registration Form</h2>
            <form  className="w-75 mx-auto">
           <div className="mb-3 row">
          <label forhtml="inputName" className="col-sm-2 col-form-label">
             Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`form-control ${errors.nameErrors?'border-danger':''}`}
              id="inputName"
              value={user.name}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.nameErrors}</small>
          </div>
        </div>
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
          <label forhtml="inputUserName" className="col-sm-2 col-form-label">
            User Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`form-control ${errors.userNameErrors?'border-danger':''}`}
              id="inputUserName"
              value={user.userName}
              name="userName"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.userNameErrors}</small>
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
        <div className="mb-3 row">
          <label forhtml="inputConfirmPassword" className="col-sm-2 col-form-label">
          Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className={`form-control ${errors.confirmPasswordErrors?'border-danger':''}`}
              id="inputConfirmPassword"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.confirmPasswordErrors}</small>
          </div>
        </div>
        <button className="btn btn-danger px-4 py-2" onClick={(e)=>handleSubmit(e)}>Register</button>
        </form>
        </div>
    )
}