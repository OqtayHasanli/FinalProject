import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import './login.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from "./images/logo.png"
import axios from 'axios';
import Swal from 'sweetalert2';
const schema = Yup.object().shape({
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
});

const Login = () => {
  const Navigate=useNavigate()
  return (
    <>
      <div className='loginregisterNavbar'>
        <div className='mycontainernavbar'>
          <div><img className='logoimage' src={logo} alt="" /></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='maindiv'>
        <Formik
          validationSchema={schema}
          initialValues={{ password: "" }}
          onSubmit={(values) => {
            axios.post("http://localhost:3100/loginAdmin/",values).then((res)=>{ 
                console.log(res.data);  
              localStorage.setItem("token",res.data)   
              if (res.status==200) {
                // Swal.fire({
                //   icon: "error",
                //   title: "Oops...",
                //   text: "Passcode is wrong",
                // });
                console.log("error");
              }
              if (res.status==201) {
                Navigate("/products")
              }
            })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <div className="login">
              <div className="form">

                <form noValidate onSubmit={handleSubmit}>
                  <span>Login</span>


                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />

                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <button type="submit">Login</button>
                </form>
              </div>
              
            </div>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Login