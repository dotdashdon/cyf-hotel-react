import React from "react";

const Footer = props => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <ul>
          {props.locations.map(location => (
            <li key={location}>{location}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
