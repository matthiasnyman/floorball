import React from "react";
import Player from './Player';
import AddPlayer from './AddPlayer';

const Players = (props) => {
    const players = props.players;
    const cards = [];

    players.forEach(person => {
      cards.push(
        <Player key={person.id} person={person} />
      );       
    });
    cards.push(<AddPlayer key="x2000" team={players}  />)

    return (
      <div style={{ margin: "10vh 0" }} className="players">
        {cards}
      </div>
    );
}

export default Players;
