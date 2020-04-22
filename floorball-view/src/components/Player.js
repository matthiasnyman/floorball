import React from "react";
import { Card } from "react-bootstrap";

const Player = (person) => {
  const { image, name} = person.person;
  return (
    <Card>
      <Card.Img className="card-img" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Player;
