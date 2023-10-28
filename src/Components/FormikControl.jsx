import React from 'react';
import {
  Input, Textarea, Selectcomp, DateTimePicker, CheckboxWrapper,
} from './Formcomponents';

// eslint-disable-next-line react/prop-types
function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;

    case 'select':
      return <Selectcomp {...rest} />;

    case 'checkbox':
      return <CheckboxWrapper {...rest} />;

    case 'date':
      return <DateTimePicker {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
