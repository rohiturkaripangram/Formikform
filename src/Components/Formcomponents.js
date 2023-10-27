import React from "react";
import TextError from "./TextError";
import { Formik, Field, ErrorMessage } from "formik";
import {
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  TextField,
  Button,
  Grid,
  MenuItem,
  Radio,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const componentMargin = {
  marginBottom: "15px",
};

export const Input = ({ label, name, ...rest }) => {
  return (
    <div style={componentMargin}>
      <InputLabel>{label}</InputLabel>
      <FormControl fullWidth>
        <Field
          id={name}
          name={name}
          {...rest}
          as={TextField}
          placeholder={`Enter ${label}`}
        />
        <ErrorMessage name={name} component={TextError} />
      </FormControl>
    </div>
  );
};

export const Textarea = ({ label, name, ...rest }) => {
  return (
    <div style={componentMargin}>
      <InputLabel>{label}</InputLabel>
      <FormControl fullWidth>
        <Field
          id={name}
          name={name}
          {...rest}
          as={TextField}
          multiline
          rows={4}
          placeholder={`Enter ${label}`}
        />
        <ErrorMessage name={name} component={TextError} />
      </FormControl>
    </div>
  );
};

export const Radiocomp = ({ label, name, options, ...rest }) => {
  return (
    <div style={componentMargin}>
      <InputLabel>{label}</InputLabel>
      <FormControl component="fieldset">
        <Field id={name} name={name} {...rest}>
          {({ field }) => (
            <RadioGroup {...field} name={name} >
              {options.map((item) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio />}
                  label={item.key}
                />
              ))}
            </RadioGroup>
          )}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </FormControl>
    </div>
  );
};

export const Checkboxcomp = ({ label, name, options, ...rest }) => {
  return (
    <div style={componentMargin}>
      <InputLabel>{label}</InputLabel>
      <FormControl component="fieldset">
        <Field name={name} {...rest}>
          {({ field }) => (
            <div >
              {options.map((item) => (
                <FormControlLabel
                  key={item.value}
                  control={
                    <Checkbox
                      checked={field.value.includes(item.value)}
                      onChange={(e) => {
                        const newValue = [...field.value];
                        if (e.target.checked) {
                          newValue.push(item.value);
                        } else {
                          newValue.splice(newValue.indexOf(item.value), 1);
                        }
                        field.onChange({
                          target: { name: name, value: newValue },
                        });
                      }}
                    />
                  }
                  label={item.key}
                />
              ))}
            </div>
          )}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </FormControl>
    </div>
  );
};

export const Selectcomp = ({ label, name, options, ...rest }) => {
  return (
    <div style={componentMargin}>
      <InputLabel>{label}</InputLabel>
      <FormControl fullWidth>
        <Field name={name} {...rest} as={Select}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.key}
            </MenuItem>
          ))}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </FormControl>
    </div>
  );
};
