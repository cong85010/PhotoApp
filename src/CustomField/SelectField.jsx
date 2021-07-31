import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import Select from "react-select";
import { ErrorMessage } from 'formik';

function SelectField(props) {

    const {field, form,  label, options, placeholder} = props

    const {name, value} = field
    const selectOption = options.find(option => option.value === value)
    const handleOnChangeOption = (selectOption) => {
          const selectValue = selectOption ?  selectOption.value : selectOption

          const changeEvent =  {
              target: {
                name: name,
                value: selectValue,
              }
          }
          field.onChange(changeEvent)
     }
     const {errors, touched}= form

     const showErrors = errors[name] && touched[name]
    return (
        <FormGroup>
        <Label for={name}>{label}</Label>
        <Select
          id={name}
          {...field}
          value={selectOption}
          onChange={handleOnChangeOption}
          placeholder={placeholder}
          options={options}
          className={showErrors?'is-invalid  rounded border border-danger':''}
        ></Select>
        
        <ErrorMessage component={FormFeedback} name={name} />
      </FormGroup>
    )
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

SelectField.default = {
    label: '',
    placeholder: ''
}
export default SelectField

