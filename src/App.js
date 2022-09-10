import React from "react";
import './App.css';
import Team from "./team";

const TEAM_ENDPOINT = 'https://631be1534fa7d3264ca3334f.mockapi.io/teams_api/team';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  render() {
    const teams = this.state
      ? this.state.teams.map((team, index) =>
      <Team
        key={index}
        data={team}
        addPlayer = {this.addPlayer}
        deletePlayer = {this.deletePlayer} />)
        : null;
        return (
          <div>
            {teams}
          </div>
        );
  }

  componentDidMount() {
    fetch(TEAM_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        this.setState({
          teams:data
        });
      });
  }

  deletePlayer(e, team, player) {
    const index = team.players.indexOf(player);
    team.players.splice(index, 1);
    updateTeam(team)
      .then(() => {
        this.setState(state => {
          for (let t of state.teams) {
            if (t._id === team._id) {
              let t = team;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }

  addPlayer(e, team, player) {
    team.players.push(player)
    updateTeam(team)
      .then(() => {
        this.setState(state => {
          for (let t of state.teams) {
            if (t._id === team._id) {
              let t = team;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
}

function updateTeam(team) {
  return fetch(`${TEAM_ENDPOINT}/${team._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(team)
  });
}















// default code that comes with file
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
