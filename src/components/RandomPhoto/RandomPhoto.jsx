import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Label } from "reactstrap";
import axios from "axios";
import { getLabelFromValue } from "constants/gobal";
import { screen } from "@testing-library/react";


function RandomPhoto(props) {
  const {catagory, name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  const labelCatagory = getLabelFromValue(catagory)
  // const [clientID, setClientID] = useState('oXNcAkTeDBHZstq5Y2VqVe2jqwzO-jOJKpNZpJbrJzM')

  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  
  const url = 
    `https://source.unsplash.com/${width}x${height}/?${labelCatagory}`
  


  const handleRandomClick = async () => {
    onImageUrlChange(url);

  };


  return (
    <FormGroup>
      <div>
        <Button
          type="button"
          color="primary"
          outline
          name={name}
          onBlur={onRandomButtonBlur}
          onClick={handleRandomClick}
        >
          Random a photo
        </Button>
      </div>
      <div className="mt-3">
        {imageUrl && (
          <img width="400px" height="300px" src={url} alt="loading" />
        )}
      </div>

    </FormGroup>
  );
}

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};
RandomPhoto.default = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
