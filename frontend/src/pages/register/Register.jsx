import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import '../login/login.scss'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
});
const Register = () => {
  return (
    <>
    <div className='loginregisterNavbar'>
        <div className='mycontainernavbar'>
          <div><img src={logo} alt="" /></div>
          <div></div>
          <Link className='Linkbackground' to={"/"}>Login</Link>
        </div>
      </div>

    <div className='maindiv'>
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
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
              <span>Register</span>
              
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
              <button type="submit">Create</button>
            </form>
          </div>
          
        </div>
      )}
    </Formik>
    </div>
  </>
  )
}

export default Register