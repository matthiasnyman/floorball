import React from "react";
import Teams from "./Teams";
import Players from "./Players";
import CreateTeam from "./CreateTeam";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./Filter";

const Table = ({globals, players, teams, postTeam, loadTeam, filterTeams }) => {

  return (
    <Container>
      <Row>
        <Col md="4">
          <CreateTeam globals={globals} postTeam={postTeam} />
        </Col>

        <Col md="8">
          <Filter globals={globals} filterTeams={filterTeams} />
          <Teams teams={teams} loadTeam={loadTeam} />
        </Col>
      </Row>
      
      <Players players={players}  />
    </Container>
  );
};

export default Table;
