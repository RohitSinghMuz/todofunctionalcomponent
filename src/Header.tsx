import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul style={Styles.unSortedListStyle}>
        <li style={Styles.listStyle}>
          <Link to="/" data-testid="homeLinkId">
            Home
          </Link>
        </li>
        <li style={Styles.listStyle}>
          <Link to="/form" data-testid="formLinkId">
            Form
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Header;
const Styles = {
  unSortedListStyle: {
    display: "flex",
    justifyContent: "center",
  },
  listStyle: {
    textDecoration: "none",
    listStyleDecoration: "none",
    listStyleType: "none",
    margin: "0px 20px",
  },
};
