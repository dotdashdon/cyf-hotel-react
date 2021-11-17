import React from "react";
import "./TouristCards.css";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1588934356018-93c066684704?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Manchester tram"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="description">
                  Explore the city and discover hidden treasures, intriguing
                  history, fantastic food, and spectacular architecture. Enjoy a
                  guided tour of Manchester with a local to uncover the city’s
                  story, whilst enjoying some of the best food and drink on
                  offer, delve into the past with the daily Discover Manchester
                  Walking Tour, experience the city’s top attractions.{" "}
                </p>
                <a
                  href="https://visitmanchester.com"
                  className="btn btn-primary"
                >
                  Manchester
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-gallery-with-text/lightshow_at_festival_2018_glasgow_vb34168999.jpg"
                alt="Glasgow at night"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="description">
                  From independent stores to high street retailers, Glasgow is
                  the best shopping city. Glasgow's city centre is home to
                  flagship stores, impressive shopping centres and designer
                  favourites all within an easily walkable area. The city is
                  also rich in artists and creators which makes for a thriving
                  and exciting independent shopping scene.{" "}
                </p>
                <a
                  href="https://peoplemakeglasgow.com"
                  className="btn btn-primary"
                >
                  Glasgow
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
                alt="Big Ben and the Thames River"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="description">
                  Fill your time in London with amazing experiences, from free
                  museums and world-class theatre, to foodie delights, serious
                  shopping and unmissable attractions, there are exciting
                  adventures waiting for you.{" "}
                </p>
                <a href="https://visitlondon.com" className="btn btn-primary">
                  London
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
