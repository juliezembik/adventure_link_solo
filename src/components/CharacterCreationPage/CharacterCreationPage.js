import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const gender = [
    {
        value: 'non-binary',
        label: 'Non-binary'
    },
    {
        value: 'female',
        label: 'Female'
    },
    {
        value: 'male',
        label: 'Male'
    },
];

const race = [
    {
        value: 'human',
        label: 'Human'
    },
    {
        value: 'elf',
        label: 'Elf'
    },
    {
        value: 'orc',
        label: 'Orc'
    }
];

const personClass = [
    {
        value: 'fighter',
        label: 'Fighter'
    },
    {
        value: 'paladin',
        label: 'Paladin'
    },
    {
        value: 'cleric',
        label: 'Cleric'
    }
];

const alignment = [
    {
        value: 'good',
        label: 'Good'
    },
    {
        value: 'evil',
        label: 'Evil'
    }
]


class CharacterCreationPage extends Component {
    constructor() {
        super();
        this.state = {
            character_name: '',
            gender: '',
            race: '',
            person_class: '',
            alignment: '',
            background: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_CHARACTER', payload: this.state }
        this.props.dispatch(action);
    }

    handleCharacterName = (event) => {
        this.setState({
            ...this.state,
            character_name: event.target.value,
        });
    }

    handleGender = (event) => {
        this.setState({
            ...this.state,
            gender: event.target.value,
        })
    }

    handleRace = (event) => {
        this.setState({
            ...this.state,
            race: event.target.value,
        })
    }

    handlePersonClass = (event) => {
        this.setState({
            ...this.state,
            person_class: event.target.value,
        })
    }

    handleAlignment = (event) => {
        this.setState({
            ...this.state,
            alignment: event.target.value,
        })
    }

    handleBackground = (event) => {
        this.setState({
            ...this.state,
            background: event.target.value,
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit} >
                    <TextField
                        id="standard-name"
                        label="Character Name"
                        value={this.state.character_name}
                        onChange={this.handleCharacterName}
                        margin="normal"
                    />
                    <TextField
                        id="select-gender"
                        select
                        label="Select"
                        // className={classes.textField}
                        value={this.state.gender}
                        onChange={this.handleGender}
                        SelectProps={{
                            MenuProps: {
                                // className: classes.menu,
                            },
                        }}
                        helperText="Select Gender"
                        margin="normal"
                    >
                        {gender.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="select-race"
                        select
                        label="Select"
                        // className={classes.textField}
                        value={this.state.race}
                        onChange={this.handleRace}
                        SelectProps={{
                            MenuProps: {
                                // className: classes.menu,
                            },
                        }}
                        helperText="Select Race"
                        margin="normal"
                    >
                        {race.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="select-person-class"
                        select
                        label="Select"
                        // className={classes.textField}
                        value={this.state.person_class}
                        onChange={this.handlePersonClass}
                        SelectProps={{
                            MenuProps: {
                                // className: classes.menu,
                            },
                        }}
                        helperText="Select Class"
                        margin="normal"
                    >
                        {personClass.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="select-alignment"
                        select
                        label="Select"
                        // className={classes.textField}
                        value={this.state.alignment}
                        onChange={this.handleAlignment}
                        SelectProps={{
                            MenuProps: {
                                // className: classes.menu,
                            },
                        }}
                        helperText="Select Alignment"
                        margin="normal"
                    >
                        {alignment.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-background"
                        label="Background"
                        value={this.state.background}
                        onChange={this.handleBackground}
                        margin="normal"

                    />
                    <button variant="contained" color="primary" >Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(CharacterCreationPage);