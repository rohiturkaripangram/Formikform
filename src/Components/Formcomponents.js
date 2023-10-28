import React from 'react';
import { TextField,MenuItem,  Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel  } from "@mui/material"
import { useField,useFormikContext } from 'formik';

export const Input = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield} />
  );
};


export const Textarea = ({
    name,
    ...otherProps
  }) => {
    const [field, meta] = useField(name);
  
    const configTextarea = {
      ...field,
      ...otherProps,
      fullWidth: true,
      variant: 'outlined',
      multiline: true, 
      rows: 3, 
    };
  
    if (meta && meta.touched && meta.error) {
      configTextarea.error = true;
      configTextarea.helperText = meta.error;
    }
  
    return (
      <TextField {...configTextarea} />
    );
  };
  
  
  export const DateTimePicker = ({
    name,
    ...otherProps
  }) => {
    const [field, meta] = useField(name);
  
    const configDateTimePicker = {
      ...field,
      ...otherProps,
      type: 'date',
      variant: 'outlined',
      fullWidth: true,
      InputLabelProps: {
        shrink: true
      }
    };
  
    if(meta && meta.touched && meta.error) {
      configDateTimePicker.error = true;
      configDateTimePicker.helperText = meta.error;
    }
  
    return (
      <TextField
        {...configDateTimePicker}
      />
    );
  };


export const Selectcomp= ({
    name,
    options,
    ...rest
  }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
  
    const handleChange = evt => {
      const { value } = evt.target;
      setFieldValue(name, value);
    };
  
    const configSelect = {
      ...field,
      ...rest,
      select: true,
      variant: 'outlined',
      fullWidth: true,
      onChange: handleChange
    };
  
    if (meta && meta.touched && meta.error) {
      configSelect.error = true;
      configSelect.helperText = meta.error;
    }
  
    return (
      <TextField {...configSelect}>
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {options[item]}
            </MenuItem>
          )
        })}
      </TextField>
    );
  };

  export const CheckboxWrapper = ({
    name,
    label,
    legend,
    ...otherProps
  }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
  
    const handleChange = evt => {
      const { checked } = evt.target;
      setFieldValue(name, checked);
    };
  
    const configCheckbox = {
      ...field,
      onChange: handleChange
    };
  
    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
      configFormControl.error = true;
    }
  
    return (
      <FormControl {...configFormControl}>
        <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...configCheckbox} />}
            label={label}
          />
        </FormGroup>
      </FormControl>
    );
  };
  
 


