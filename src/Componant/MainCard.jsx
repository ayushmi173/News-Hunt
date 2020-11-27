import React from "react";
import AxiosFile from "./AxiosFile";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFootballBall } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faTransgender } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const MainCard = (props) => {
  let element = "";
  if (props.name === "Sports") {
    element = <FontAwesomeIcon icon={faFootballBall} />;
  } else if (props.name === "Politics") {
    element = <FontAwesomeIcon icon={faVoteYea} />;
  } else if (props.name === "Technology") {
    element = <FontAwesomeIcon icon={faNetworkWired} />;
  } else if (props.name === "World") {
    element = <FontAwesomeIcon icon={faGlobeAfrica} />;
  } else if (props.name === "Science") {
    element = <FontAwesomeIcon icon={faFlask} />;
  } else if (props.name === "Entertainment") {
    element = <FontAwesomeIcon icon={faGlassCheers} />;
  } else if (props.name === "Weather") {
    element = <FontAwesomeIcon icon={faCloudSunRain} />;
  } else if (props.name === "Economy") {
    element = <FontAwesomeIcon icon={faHandHoldingUsd} />;
  } else if (props.name === "Romance") {
    element = <FontAwesomeIcon icon={faTransgender} />;
  }

  const dispatch = useDispatch();
  const searchValue = props.name;
  const cardCalling = () => {
    return (
      <>
        {dispatch({ type: "SET_BUTTON_CLICKED", payload: searchValue })}
        <AxiosFile />
      </>
    );
  };

  return (
    <>
      <Link to="news">
        <div
          className="main-card  text-center "
          style={{ backgroundColor: `${props.color}` }}
          onClick={() => cardCalling()}
        >
          <div>
            <div>{element}</div>
            <div> {props.name}</div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default MainCard;
