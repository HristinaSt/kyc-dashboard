import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, headerStyle, titleStyle }) => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  headerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
};

export default Header;
