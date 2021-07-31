import React, { useState } from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import { PHOTO__APP_CATAGORY_OPTIONS } from "constants/gobal";
import { FastField, Field, Form, Formik } from "formik";

import RandomField from "CustomField/RandomField";
import PropTypes from "prop-types";

import SelectField from "CustomField/SelectField";
import InputField from "CustomField/InputField";
import * as Yup from 'yup'

function PhotoForm(props) {
  const initialValues = {
    title: "",
    catagoryId: null,
    photo: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    catagoryId: Yup.number().required("This field is required").nullable(),
    photo: Yup.string().required("This field is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        //do something

        const { values, isSubmitting} = formikProps;
        console.log(values)
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title Photo"
              placeholder="Your title photo"
            ></FastField>
            <Field
              name="catagoryId"
              component={SelectField}
              label="Catagory"
              placeholder="Choose catagory"
              options={PHOTO__APP_CATAGORY_OPTIONS}
            ></Field>
            <Field
              name="photo"
              catagory={values.catagoryId}
              component={RandomField}
              label="Photo"
            ></Field>

            <FormGroup>
              <Button type="submit" color="primary" size='lg' style={{minWidth: '100px'}}>
              {isSubmitting? <Spinner size='sm'> </Spinner>:'Add to album'}
                
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.default = {
  onSubmit: null,
};

export default PhotoForm;
