import React from "react";
import NewPlayerForm from "./new-player-form";

export default class Team extends React.Component {
    render() {
        const players = this.props.data.players
            ? this.props.data.players.map((player, index) => 
            <li key={index}>
                {player.name} Position: {player.position}
                <button onClick={e =>
                this.props.deletePlayer(e, this.props.data, player)
            }>Delete</button>
            </li>)
            : null;
            return (
                <div>
                    <h1>{this.props.data.name}</h1>
                    <ul>
                        {players}
                    </ul>
                    <NewPlayerForm
                        addPlayer={this.props.addPlayer} data={this.props.data} />
                </div>
            );
    }
}