import React from "react";
import { Card, Button, Image } from "react-bootstrap";
const ShowNews = (props) => {
  const date = props.date;
  const Onlydate = date.slice(0, 10);
  const OnlyTime = date.slice(11, 19);
  return (
    <>
      <Card className="showNewsCard text-center">
        <Card.Header className="headerr">
          <h4>Trending News : {props.id + 1}</h4>
        </Card.Header>
        <Image style={{ height: "400px" }} src={props.urlToImage} fluid />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button className="button" onClick={() => window.open(`${props.url}`)}>
            Read More
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Published At : {Onlydate} Time : {OnlyTime}
        </Card.Footer>
      </Card>
      <br />
    </>
  );
};
export default ShowNews;
