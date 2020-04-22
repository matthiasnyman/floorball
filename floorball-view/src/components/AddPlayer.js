import React from "react";
import { Button, Card, Form } from "react-bootstrap";

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      age: 0,
      handed: 0,
      team: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postTeam(this.state);

    event.target.reset();
  }

  render() {

    return (
      <Card>
        <Card.Body>
        <h4>Create a new Team</h4>
          <Form>
            <Form.Group>
              <Form.Label>
                Image link:
                <Form.Control
                  type="text"
                  name="image"
                  target={this.value}
                  onChange={this.handleInputChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Name:
                <Form.Control
                  type="text"
                  name="name"
                  target={this.value}
                  onChange={this.handleInputChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Age:
                <Form.Control
                  type="number"
                  name="age"
                  target={this.value}
                  onChange={this.handleInputChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Handed:
                <Form.Control
                  type="number"
                  name="handed"
                  target={this.value}
                  onChange={this.handleInputChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Team:
                <Form.Control
                  type="number"
                  name="team"
                  target={this.value}
                  onChange={this.handleInputChange}
                />
              </Form.Label>
            </Form.Group>

            <Button type="submit" value="Submit"> Submit </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default AddPlayer;
