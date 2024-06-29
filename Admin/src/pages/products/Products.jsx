import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../users/users.scss";

const Products = () => {
  const [Data, setData] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3100/products")
      .then((res) => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3100/products/${id}`);
      setData(Data.filter(product => product._id !== id));
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Products</title>
        </Helmet>
      </HelmetProvider>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((elem) => (
            <tr key={elem._id}>
              <td><img src={elem.image} alt={elem.title} style={{ width: '100px', height: 'auto' }} /></td>
              <td>{elem.title}</td>
              <td>{elem.desc}</td>
              <td>{elem.category}</td>
              <td>{elem.price}</td>
              <td>
                <button
                  className="deletebtn"
                  onClick={() => deleteProduct(elem._id)}
                >
                  Delete
                </button>
                <button
                  className="editbtn"
                  onClick={() => editProduct(elem)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='bottomsideUsers'>
        <h1>{editingProduct ? "Edit Product" : "Add Product"}</h1>
        <Formik
          initialValues={editingProduct || { title: '', price: '', desc: "", category: "", image: "" }}
          enableReinitialize={true}
          validationSchema={Yup.object({
            title: Yup.string().required('Required'),
            price: Yup.number().required('Required'),
            desc: Yup.string().required('Required'),
            category: Yup.string().required('Required'),
            image: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const request = editingProduct
              ? axios.put(`http://localhost:3100/products/${editingProduct._id}`, values)
              : axios.post("http://localhost:3100/products", values);

            request
              .then(res => {
                if (editingProduct) {
                  setData(Data.map(product => product._id === editingProduct._id ? res.data : product));
                } else {
                  setData([...Data, res.data]);
                }
                setSubmitting(false);
                resetForm();
                setEditingProduct(null);
              })
              .catch(err => {
                console.error(err);
                setSubmitting(false);
              });
          }}
        >
          <Form className='formadmin'>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="error-message" />

            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" component="div" className="error-message" />

            <label htmlFor="desc">Description</label>
            <Field name="desc" type="text" />
            <ErrorMessage name="desc" component="div" className="error-message" />

            <label htmlFor="category">Category</label>
            <Field name="category" type="text" />
            <ErrorMessage name="category" component="div" className="error-message" />

            <label htmlFor="image">Image URL</label>
            <Field name="image" type="text" />
            <ErrorMessage name="image" component="div" className="error-message" />

            <button type="submit">{editingProduct ? "Update" : "Add"}</button>
            {editingProduct && <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>}
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Products;
