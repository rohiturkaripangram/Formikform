import React from "react";
import {Input,Textarea,Select, Radiocomp, Checkboxcomp,Datepicker} from "./Formcomponents"

const FormikControl = ({ control,...rest }) => {
  switch (control) {
    case "input":
        return <Input {...rest} />
    case "textarea":
        return <Textarea {...rest}/>
    case "select":
        return <Select {...rest}/>
    case "radio":
           return <Radiocomp {...rest} />
    case "checkbox":
        return <Checkboxcomp {...rest}/>
    case "date":
      return <Datepicker {...rest}/>
    default:
      return null;
  }
  
};

export default FormikControl;
