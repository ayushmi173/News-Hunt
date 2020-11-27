import React from "react";
import AxiosFile from "./AxiosFile";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFootballBall,
  faHandHoldingUsd,
  faCloudSunRain,
  faNetworkWired,
  faTransgender,
  faFlask,
  faGlobeAfrica,
  faVoteYea,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";

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
    // console.log("Search Value in maincard: " + searchValue)
    return (
      <>
        {dispatch({ type: "SET_BUTTON_CLICKED", payload: searchValue })}
        <AxiosFile />
      </>
    );
  };

  return (
    <>
      <Link to="News">
        <div className="main-card  text-center " onClick={() => cardCalling()}>
          <div>
            <div>{element}</div>
          </div>
          <h3> {props.name}</h3>
        </div>
      </Link>
    </>
  );
};
export default MainCard;
