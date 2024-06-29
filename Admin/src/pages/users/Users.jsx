import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./users.scss";

const Users = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3100/users").then((res) => setData(res.data));
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3100/users/${id}`);
      setData(Data.filter(user => user._id !== id));
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Users</title>
        </Helmet>
      </HelmetProvider>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((elem) => (
            <tr key={elem._id}>
              <td>{elem.email}</td>
              <td>{elem.password}</td>
              <td>
                <button
                  className="basketremove"
                  onClick={() => deleteUser(elem._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='bottomsideUsers'>
        <h1>User Add</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be 8 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios.post("http://localhost:3100/users", { ...values })
            .then(res => {
              console.log(res);
              setData([...Data, res.data]); 
              setSubmitting(false);
              resetForm();
            })
            .catch(err => {
              console.error(err);
              setSubmitting(false);
            });
        }}
      >
        <Form className='formadmin'>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <button type="submit">Add</button>
        </Form>
      </Formik>
      </div>
    </>
  );
};

export default Users;
