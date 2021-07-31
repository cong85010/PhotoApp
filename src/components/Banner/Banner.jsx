import React from "react";
import PropTypes from "prop-types";
import './Banner.scss'

function Banner(props) {
  const { title, backGroundUrl } = props;
  const bannerStyle = backGroundUrl
    ? { backgroundImage: ` url(${backGroundUrl})` }
    : {};
  return (
      <section className='banner flex-center' style={bannerStyle}>
          <h1 className='banner__title'>{title}</h1>
      </section>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  backGroundUrl: PropTypes.string,
};
Banner.default = {
  title: "",
  backGroundUrl: "",
};

export default Banner;
