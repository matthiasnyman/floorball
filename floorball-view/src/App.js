import React from "react";
import "./App.css";
import Table from "./components/Table";
import CrashLog from "./components/Crashlog";
import PostLocalStorage from "./components/PostLocalStorage"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://localhost:57673",
      teams: [],
      players: [],
      globals: {}
    };

    this.postTeam = this.postTeam.bind(this);
    this.postPlayer = this.postPlayer.bind(this);
    this.loadTeam = this.loadTeam.bind(this);
    this.filterTeams = this.filterTeams.bind(this);

  }

  componentDidMount() {
    const API_ADDRESS = this.state.url;

    PostLocalStorage();

    //Get all globals
    fetch(`${API_ADDRESS}/globals`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Usuccessful request to api");
      }
      return response.json();
    })
    .then(result => {
      this.setState({
        globals: result
      });
    })
    .catch( err => CrashLog(err.title, "App.js", 39))
    
    //Get all all teams
    fetch(`${API_ADDRESS}/team/0`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          teams: result
        });
      });
  }

  postTeam(prop) {
    const { Name, Nationality } = prop;
    //const url = this.state.url;
    let data = {
      "Nationality": Number(Nationality),
      "Name": `${ Name }`
    };

    fetch("http://localhost:57673/team", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    })

    .catch(err => console.log(err));

  }

  postPlayer(prop) {
    const { Image, name, age, handed, team } = prop;
    //const url = this.state.url;
    let data = {
      "Image": `${ Image }`,
      "name": `${ name }`,
      "age": Number(age),
      "handed": Number(handed),
      "teamId": Number(team)
    };

    fetch("http://localhost:57673/player", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    })

    .catch(err => console.log(err));

  }

  loadTeam(prop) {
    const url = this.state.url;
    let id = prop.target.id ? prop.target.id : 0;

    fetch(`${url}/player/${id}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Usuccessful request to api");
      }
      return response.json();
    })
    .then(res => {
      this.setState({
        players: res
      })
    });
    
  }

  filterTeams(event) {
    const url = this.state.url;
    let id = event.target.id;


    fetch(`${url}/team/${id}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Usuccessful request to api");
      }
      return response.json();
    })
    .then(res => {
      this.setState({
        teams: res
      })
    });
  }

  render() {
    const { teams, players, globals } = this.state;

    return (
      <div className="App">
        <h3>Floorball World Cup</h3>

        <Table 
          globals={globals} 
          teams={teams} 
          players={players} 
          postTeam={this.postTeam}  
          loadTeam={this.loadTeam} 
          filterTeams={this.filterTeams} 
        />

      </div>
    );
  }
}

export default App;
