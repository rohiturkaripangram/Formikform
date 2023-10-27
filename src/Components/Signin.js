import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowRight } from "lucide-react";
import FormikControl from "./FormikControl";

export function Signin() {


  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password is too short - should be 5 character minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="space-y-5">
                <FormikControl
                  control="input"
                  type="text"
                  label="firstName"
                  name="firstName"
                />
              </div>

              <div>
                <FormikControl
                  control="input"
                  type="text"
                  label="lastName"
                  name="lastName"
                />
              </div>

              <div>
                <FormikControl
                  control="input"
                  type="email"
                  label="email"
                  name="email"
                />
              </div>

              <div>
                <FormikControl
                  control="input"
                  type="password"
                  label="password"
                  name="password"
                />
              </div>

              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
