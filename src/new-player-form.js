import React from "react";

export default class NewPlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            positionValue: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handlePositionChange(e) {
        this.setState({positionValue: e.target.value});
    }

    handleClick(e) {
        this.props.addPlayer(e, this.props.data,
            {name: this.state.nameValue, position: this.state.positionValue});
        this.setState({nameValue: '', positionValue: ''});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type="text" placeholder="Position" onChange={this.handlePositionChange} value={this.state.positionValue} />
                <button onClick={this.handleClick}>Add Player</button>

            </div>
        )
    }
}