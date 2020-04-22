import React from "react";
import { Table } from "react-bootstrap";

const Teams = props => {
  let teams = [];

  for (let key in props.teams) {
    const { name, nationality, id } = props.teams[key];

    teams.push(
      <tr key={id}>
        <td style={{cursor: "pointer"}} >&#9998;</td>
        <td>{name}</td>
        <td>{nationality}</td>
        <td style={{cursor: "pointer"}} onClick={props.loadTeam} id={id}>Spelare</td>
      </tr>
    );
  }

  return (
    <>
    <h3>Teams</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>edit</th>
          <th>Name</th>
          <th>Nation</th>
          <th>Members</th>
        </tr>
      </thead>
      <tbody>{teams}</tbody>
    </Table>
    </>
  );

};

export default Teams;
