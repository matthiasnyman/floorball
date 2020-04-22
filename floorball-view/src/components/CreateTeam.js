import React from "react";
import { Card, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Nationality: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = "";

    name === "Nationality" ? value = target.target : value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postTeam(this.state);

    // this.setState({
    //   Name: "",
    //   Nationality: 0
    // });
    event.target.reset();
  }


  render() {

    const countryList = [];
    const countries = this.props.globals.countriesList
  
    for(let key in countries){
      const { Text, Value } = countries[key];
  
      countryList.push(
      <Dropdown.Item 
        key={key}
        name="Nationality"
        target={Value}
        onClick={this.handleInputChange}
      > 

        { Text } 
      
      </Dropdown.Item>
      )
    }
    
    return (
      <Card style={{ marginTop: '10vh' }}>

        <h4>Create a new Team</h4>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Label>Team name:

              <Form.Control
                type="text"
                name="Name"
                target={this.value}
                onChange={this.handleInputChange}
                />
            </Form.Label>
          </Form.Group>

          <Form.Group> 
            <DropdownButton  title="Countries">
              { countryList }
            </DropdownButton> 
          </Form.Group> 

          <Button type="submit" value="Submit"> Submit </Button>
        </Form>

      </Card>
    );
  }
}

export default CreateTeam;
