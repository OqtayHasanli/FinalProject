import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import './login.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import axios from 'axios';
import Swal from 'sweetalert2';
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
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
          <Link className='Linkbackground' to={"register"}>Register</Link>
        </div>
      </div>
      <div className='maindiv'>
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            axios.post("http://localhost:3100/login/",values).then((res)=>{      
              if (res.status==200) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Email or password is wrong",
                });
              }
              if (res.status==201) {
                Navigate("/home")
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
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter username"
                    className="form-control inp_text"
                    id="email"
                  />

                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>

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
              <Link to={"register"}><button className='createacount'>Create acount</button></Link>
            </div>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Login