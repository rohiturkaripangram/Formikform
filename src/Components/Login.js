import React from 'react'
import {Formik,Form} from "formik"
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const Login = () => {
    const initialValues={
        email:'',
        password:''
    }

    const validationSchema=Yup.object({
        email:Yup.string().email('Inavlid Email address').required('Email is required'),

        password: Yup.string().min(5,"password should be atleast 4 character").required('password is required')
    })

    const onSubmit=value=>{
        console.log(value)
    }
        

    
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {
            (formik)=>{
                return <Form>
                      <FormikControl control='input' 
                      type='email'
                      label='Email'
                      name='email'
                      />
                       <FormikControl control='input' 
                      type='password'
                      label='password'
                      name='password'
                      />
                      <button disabled={!formik.isValid} type='submit'>Submit</button>
                </Form>
            }
          }
    </Formik>
  )
}

export default Login