import React from "react";
import {Input,Textarea,Selectcomp, Radiocomp, Checkboxcomp} from "./Formcomponents"

const FormikControl = ({ control,...rest }) => {
  switch (control) {
    case "input":
        return <Input {...rest} />
    case "textarea":
        return <Textarea {...rest}/>
    case "select":
        return <Selectcomp {...rest}/>
    case "radio":
           return <Radiocomp {...rest} />
    case "checkbox":
        return <Checkboxcomp {...rest}/>
    
    default:
      return null;
  }
  
};

export default FormikControl;
