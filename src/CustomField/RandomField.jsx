import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "components/RandomPhoto/RandomPhoto";
import { ErrorMessage } from "formik";

function RandomField(props) {
  const {catagory, field, form, label } = props;
  const { name, value, onBlur } = field;
  const {errors, touched}= form
  const showErrors = errors[name] && touched[name]
  const onImageUrlChange = (newUrl) => {
    form.setFieldValue(name, newUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        catagory={catagory}
        name={name}
        imageUrl={value}
        onImageUrlChange={onImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <p className={showErrors?'is-invalid':''}></p>
      <ErrorMessage component={FormFeedback} name={name} />
    </FormGroup>
  );
}

RandomField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomField.default = {
  label: "",
};
export default RandomField;
