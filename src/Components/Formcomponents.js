import React from "react";
import { Field, ErrorMessage, Form } from "formik";
import { Formik } from "formik";
import TextError from "./TextError";
import 'react-datepicker/dist/react-datepicker.module.css'
import DateView from 'react-datepicker'


//Input
export const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const Textarea = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} values={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const Radiocomp = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((item) => {
            return (
              <React.Fragment key={item.key}>
                <input
                  type="radio"
                  id={item.value}
                  {...field}
                  value={item.value}
                  checked={field.value === item.value}
                />
                <label htmlFor={item.value}>{item.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const Checkboxcomp = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="checkbox" id={name} name={name} {...rest}>
      {({ field }) => {
          return options.map((item) => {
            return (
              <React.Fragment key={item.key}>
                <input
                  type="checkbox"
                  id={item.value}
                  {...field}
                  value={item.value}
                  checked={field.value.includes(item.value)}
                />
                <label htmlFor={item.value}>{item.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};


export const Datepicker=({label,name,...rest})=>{

    return(
        <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field  name={name}>
            {
                ({form,field})=>{

                    const {setFieldValue}=form;
                    const {value}=field
                   return <DateView id={name} {...field} {...rest} selected={value} onChange={newValue=>setFieldValue(name,newValue)} /> 
                }
            }

        </Field>
        <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
