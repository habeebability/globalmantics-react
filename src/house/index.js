import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";
import PropTypes from "prop-types";

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);

  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <div className="col-md-12">{house.country}</div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">{house.address}</div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${house.photo}.jpeg`} alt="House" />
        </div>
        <div className="col-md-5">
          <p className="price">${house.price}</p>
          <p>{house.description}</p>
          <img
            src={emailIcon}
            height="50"
            alt="inquiry"
            onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry house={house} />}
        </div>
      </div>
    </div>
  );
};

// to enhance warning when we forget to pass house object
House.propTypes = {
  house: PropTypes.object.isRequired,
};

export default House;
