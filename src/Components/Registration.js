import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import FormikControl from "./FormikControl"
import Countries from "../Database/Countries.json"

import { Container, Grid, Typography,Button } from "@mui/material";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  description:'',
  addressLine1:'',
  arrivealDate: '',
  departureDate: '',
  termsOfService: false

  
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Inavlid Email").required("Email is Required"),
  phone:Yup.number().required('Required'),
  description:Yup.string().required('Required'),
  addressLine1:Yup.string().required('Required'),
  
  city:Yup.string().required('Required'),
  state:Yup.string().required('Required'),
  country:Yup.string().required('Required'),
  arrivealDate: Yup.date()
    .required('Required'),
  departureDate: Yup.date()
    .required('Required'),
    termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

const onSubmit = (values) => {
  console.log(values);
};
const App = () => {
  return (
    <Grid container>
     
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                      control="input"
                      name="firstName"
                      label="First Name"
                      type="text"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                      control="input"
                      name="lastName"
                      label="Last Name"
                      type="text"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                      control="input"
                      name="email"
                      label="email"
                      type="email"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                      control="input"
                      name="phone"
                      label="phone"
                      type="text"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikControl
                      control="textarea"
                      name="description"
                      label="About "
                      
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Your Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <FormikControl
                      control="input"
                      name="addressLine1"
                      label="AddressLine 1 "
                      
                    />
                  </Grid>

                
                  <Grid item xs={6}>
                    <FormikControl
                       control="input"
                       name="city"
                       label="city"
                      
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                       control="input"
                       name="state"
                       label="State"
                      
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikControl
                       control="select"
                       name="country"
                       label="country"
                       options={Countries}
                      
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <Typography>
                      Booking 
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                      control="date"
                      name="arrivealDate"
                      label="Arrival Date"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormikControl
                     control="date"
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikControl
                    control='checkbox'
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree to term and service"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <button type='submit'>
                      Submit Form
                    </button>
                  </Grid>


                  
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
