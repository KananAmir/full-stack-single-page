import React, { useState, useEffect } from 'react'
import { userFormValidation } from './schema/index'
import { useFormik } from 'formik';
import axios from 'axios';
import './index.scss'

const ProductForm = () => {


    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            birthDate: '',
            email: '',
        },
        validationSchema: userFormValidation,
        onSubmit: values => axios.post('http://localhost:8080/users', values),
    });

    return (
        <div id='product-form'>
            <h1>Fill the Form to enter new user</h1>
            <form id='product-form' onSubmit={handleSubmit}>
                <br />
                <label htmlFor="firstName" className='m-2'>First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={values.firstName}
                />
                <br />
                {errors.firstName && touched.firstName && <span style={{ color: 'red', fontSize: '16px' }}>{errors.firstName}</span>}
                <br />
                
                <label htmlFor="lastName" className='m-2'>Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                />
                <br />
                {errors.lastName && touched.lastName && <span style={{ color: 'red', fontSize: '16px' }}>{errors.lastName}</span>}
                <br />
                
                <label htmlFor="birthDate" className='m-2'>Birth Date</label>
                <input
                    id="birthDate"
                    name="birthDate"
                    type="text"
                    onChange={handleChange}
                    value={values.birthDate}
                />
                <br />
                {errors.birthDate && touched.birthDate && <span style={{ color: 'red', fontSize: '16px' }}>{errors.birthDate}</span>}
                <br />
                
                <label htmlFor="birthDate" className='m-2'>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.birthDate}
                />
                <br />
                {errors.email && touched.email && <span style={{ color: 'red', fontSize: '16px' }}>{errors.email}</span>}
                <br />
                
                <button type="submit" className='btn btn-success mt-2'>Submit</button>
            </form>
        </div>
    );
}

export default ProductForm