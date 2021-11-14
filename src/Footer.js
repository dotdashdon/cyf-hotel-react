import React from "react";

const Footer = props => {
  return (
    <div>
      <footer>
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
