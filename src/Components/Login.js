import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Inavlid Email address")
      .required("Email is required"),

    password: Yup.string()
      .min(5, "password should be atleast 4 character")
      .required("password is required"),
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
          
              <Row>
                <Col>
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />
                </Col>
                <Col>
                  <FormikControl
                    control="input"
                    type="password"
                    label="password"
                    name="password"
                  />
                </Col>
              </Row>
            

            <button disabled={!formik.isValid} type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
