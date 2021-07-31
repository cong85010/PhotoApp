import Banner from "components/Banner/Banner";
import Link_ADD_PHTO from "constants/Link_Bread";
import PhotoForm from "features/Photo/PhotoForm/PhotoForm";
import { addPhoto } from "features/Photo/Photoslice";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./AddEdit.scss";

export default function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const arrBread = Link_ADD_PHTO;

  const handleSubmit = (values) => {
    return new Promise((resole) => {
      console.log("Values: ", values);
      setTimeout(() => {
        const action = addPhoto(values);
        console.log({ action });
        dispatch(action);
        history.push("/photos");
        resole(true);
      }, 1000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Choose your like photo" />
      <div className="photo-edit__form">
        <Breadcrumb tag="nav" listTag="div">
            {arrBread.map((item) => (
            <BreadcrumbItem tag="a" href={item.link}>
                {item.name}
            </BreadcrumbItem>
            ))}
        </Breadcrumb>
        <PhotoForm onSubmit={handleSubmit}></PhotoForm>
      </div>
    </div>
  );
}
