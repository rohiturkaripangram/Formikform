import React from "react";
import {Input,Textarea,Selectcomp,DateTimePicker, CheckboxWrapper} from "./Formcomponents"
import { CheckBox } from "@mui/icons-material";

const FormikControl = ({ control,...rest }) => {
  switch (control) {
    case "input":
        return <Input {...rest} />
    case "textarea":
        return <Textarea {...rest}/>
        
    case "select":
       return <Selectcomp {...rest}/>
    
          
    case "checkbox":
        return < CheckboxWrapper {...rest}/>

    case 'date':
        return <DateTimePicker {...rest}/>
        
    default:
      return null;
  }
  
};

export default FormikControl;
