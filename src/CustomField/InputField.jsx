import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

function InputField(props) {
  const { field, form, label, placeholder, type, disabled } = props;

  const { name } = field; // name, value, onChange, onBlur
  const {errors, touched}= form

  const showErrors = errors[name] && touched[name]

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        type={type}
        disable={disabled}
        id={name}
        {...field}
        placeholder={placeholder}
        invalid={showErrors}
      />
      <ErrorMessage component={FormFeedback} name={name} />
    </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

InputField.default = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
};
export default InputField;
