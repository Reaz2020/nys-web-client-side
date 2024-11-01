// src/components/UserForm.js
import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';

const AdminsForm = ({ addUser }) => {
  const formik = useFormik({
    initialValues: { 
      name: '',
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      addUser(values);
      resetForm();
    },
  });

  return (
    // <div>user form </div>
    <form onSubmit={formik.handleSubmit} style={{ marginBottom: '20px' }}>
      <TextField
        label="Name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        required
      />
      <TextField
        label="Email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </form>
  );
};

export default AdminsForm;

