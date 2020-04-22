import React from "react";
import { Row, DropdownButton, Dropdown } from "react-bootstrap";

const Filter = (props) => {
  const countries = props.globals.countriesList
  const handed = props.globals.HandedList
  const countryList = [];
  const handedList = [];

  countryList.push(<Dropdown.Item onClick={props.filterTeams} id="0" key="9"> Hämta alla </Dropdown.Item>);
  
  for(let key in countries){
    const { Text, Value } = props.globals.countriesList[key];
    
    countryList.push(<Dropdown.Item onClick={props.filterTeams} id={Value} key={key}> { Text } </Dropdown.Item>);
  }

  for(let key in handed){
    const { Text } = props.globals.HandedList[key];

    handedList.push(<Dropdown.Item key={key}> { Text } </Dropdown.Item>);
  }


  return (
    <Row className="filter">
      <DropdownButton  title="Countries">
        { countryList }
      </DropdownButton>

      <DropdownButton title="Handed">
        { handedList }
      </DropdownButton>
    </Row>
  );
};

export default Filter;
