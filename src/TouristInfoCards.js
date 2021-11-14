import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            ultrices metus. Sed vel eros ex. Nulla cursus elementum urna.
            Phasellus venenatis eros sodales mi ultricies tempus.{" "}
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            ultrices metus. Sed vel eros ex. Nulla cursus elementum urna.
            Phasellus venenatis eros sodales mi ultricies tempus.{" "}
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            ultrices metus. Sed vel eros ex. Nulla cursus elementum urna.
            Phasellus venenatis eros sodales mi ultricies tempus.{" "}
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
