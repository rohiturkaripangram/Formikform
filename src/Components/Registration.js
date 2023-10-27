import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import Button from 'react-bootstrap/Button'

const Registration = () => {
  const dropdownOptions = [
   {
    key:'Select an option',
    value:'Select an option'
   },
    {
      key: "Java",
      value: "Java",
    },
    {
      key: "C",
      value: "C",
    },
    {
      key: "JavaScript",
      value: "javaScript",
    },
  ];
  const radioOptions = [
    {
      key: "Male",
      value: "Male",
    },
    {
      key: "Female",
      value: "Female",
    },
    {
      key: "Other",
      value: "Other",
    },
  ];

  const checkboxOptions = [
    {
      key: "BE",
      value: "BE",
    },
    {
      key: "BCA",
      value: "BCA",
    },
    {
      key: "12th",
      value: "12th",
    },
  ];

  const initialValues = {
    email: "",
    name: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter the correct email")
      .required("Email is required"),
    name: Yup.string().required("The name is required"),
    description: Yup.string().required("The description is required"),
    selectOption: Yup.string().required("Select is required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array()
      .min(1, "Select at least one option")
      .required("Rquired"),
    birthDate: Yup.date().required("DOB is required").nullable(),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className='maindiv'>

            <div className='inputDiv'>
            <FormikControl
              control="input"
              type="text"
              label="Name"
              name="name"
            />

            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            </div>
           

            <FormikControl
              control="textarea"
              label="description"
              name="description"
            />
            <FormikControl
              control="radio"
              label="Gender"
              name="radioOption"
              options={radioOptions}
            />

            <FormikControl
              control="select"
              label="Select a language"
              name="selectOption"
              options={dropdownOptions}
            />

            <FormikControl
              control="checkbox"
              label="Education"
              name="checkboxOption"
              options={checkboxOptions}
            />

            <FormikControl
              control="date"
              label="Select a birthdate"
              name="birthDate"
            />
          </div>


          <Button type="reset" variant="dark">Reset</Button>{' '}
          <Button type="submit" variant="success">Submit</Button>{' '}
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
