import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Col, Row, Dropdown } from "react-bootstrap";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";
import DateView from "react-datepicker";
import { IoMdArrowDropdown } from "react-icons/io";

const componentMargin = {
  marginBottom: "15px",
};

// Input
export const Input = ({ label, name, ...rest }) => {
  return (
    <div style={componentMargin}>
      <Form.Group as={Row} controlId={name}>
        <Form.Label column sm={2}>
          {label}
        </Form.Label>
        <Col sm={10}>
          <Field id={name} name={name} {...rest} as={Form.Control} />
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Form.Group>
    </div>
  );
};

// Textarea
export const Textarea = ({ label, name, ...rest }) => {
  return (
    <div style={componentMargin}>
      <Form.Group as={Row} controlId={name}>
        <Form.Label column sm={2}>
          {label}
        </Form.Label>
        <Col sm={10}>
          <Field
            id={name}
            name={name}
            {...rest}
            as="textarea"
            className="form-control"
          />
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Form.Group>
    </div>
  );
};

// Radiocomp
export const Radiocomp = ({ label, name, options, ...rest }) => {
  return (
    <div style={componentMargin}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {label}
        </Form.Label>
        <Col sm={4}>
          <Field name={name} {...rest}>
            {({ field }) => (
              <Row>
                {options.map((item) => (
                  <Col
                    key={item.key}
                    sm={3}
                    className="form-check form-check-inline"
                  >
                    <Form.Check
                      type="radio"
                      id={item.value}
                      label={item.key}
                      {...field}
                      value={item.value}
                      checked={field.value === item.value}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Field>
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Form.Group>
    </div>
  );
};

// Checkboxcomp
export const Checkboxcomp = ({ label, name, options, ...rest }) => {
  return (
    <div style={componentMargin}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {label}
        </Form.Label>
        <Col sm={4}>
          <Field name={name} {...rest}>
            {({ field }) =>
              options.map((item) => (
                <div key={item.key} className="form-check form-check-inline">
                  <Form.Check
                    type="checkbox"
                    id={item.value}
                    label={item.key}
                    {...field}
                    value={item.value}
                    checked={field.value.includes(item.value)}
                  />
                </div>
              ))
            }
          </Field>
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Form.Group>
    </div>
  );
};

// Select
export const Select = ({ label, name, options, ...rest }) => {
  return (
    <div style={componentMargin}>
      <Form.Group as={Row} controlId={name}>
        <Form.Label column sm={2}>
          {label}
        </Form.Label>
        <Col sm={10}>
          <Field name={name} {...rest} as="select" className="form-control">
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            ))}
          </Field>
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Form.Group>
    </div>
  );
};

// Datepicker
export const Datepicker = ({ label, name, ...rest }) => {
  return (
    <div style={componentMargin}>
      <Form.Group as={Row} controlId={name}>
        <Form.Label column sm={2}>
          {label}
        </Form.Label>
        <Col sm={10}>
          <Field name={name}>
            {({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  onChange={(newValue) => setFieldValue(name, newValue)}
                  className="form-control"
                />
              );
            }}
          </Field>
          <ErrorMessage name={name} component={TextError} />
        </Col>
      </Form.Group>
    </div>
  );
};
