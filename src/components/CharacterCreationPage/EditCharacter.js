import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './Modal.css';

//this page consists the same form as create character page.
//The only difference is the removal of race input, const, and ability to edit race.

const gender = [
    {
        value: 'Non-binary',
        label: 'Non-binary'
    },
    {
        value: 'Female',
        label: 'Female'
    },
    {
        value: 'Male',
        label: 'Male'
    },
];


const personClass = [
    {
        value: 'Fighter',
        label: 'Fighter'
    },
    {
        value: 'Paladin',
        label: 'Paladin'
    },
    {
        value: 'Cleric',
        label: 'Cleric'
    }
];

const race = [
    {
        value: 'Human',
        label: 'Human'
    },
    {
        value: 'Elf',
        label: 'Elf'
    },
    {
        value: 'Orc',
        label: 'Orc'
    }
];

const alignment = [
    {
        value: 'Good',
        label: 'Good'
    },
    {
        value: 'Evil',
        label: 'Evil'
    },
    {
        value: 'Neutral',
        label: 'Neutral'
    }
]


class EditCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character_id: parseInt(props.user.id),
            character_name: '',
            gender: '',
            race: '',
            person_class: '',
            alignment: '',
            background: ''
        }
    }

    
    handleSubmit = () => {
        const action = { type: 'UPDATE_CHARACTER', payload: this.state }
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
                <form className="edit-form">
                    <h2>Edit Character</h2>
                    <TextField
                        id="standard-name"
                        label="Name"
                        value={this.state.character_name}
                        onChange={this.handleCharacterName}
                        style={{ width: 100, margin: 10 }}
                        margin="normal"
                        className="input"
                    />
                    <TextField
                        id="select-gender"
                        select
                        label="Select"
                        className="input"
                        value={this.state.gender}
                        onChange={this.handleGender}
                        style={{ width: 150, margin: 10 }}
                        SelectProps={{
                            MenuProps: {
                                // className: input.menu,
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
                    <TextField disabled
                        label=" "
                        value={this.props.character.race}
                        id="disabled"
                        style={{ width: 'auto', margin: 10 }}
                        margin="normal"
                        onChange={this.handleRace}
                        className="input">
                    </TextField>
                    <TextField
                        id="select-person-class"
                        select
                        label="Select"
                        className="input"
                        value={this.state.person_class}
                        onChange={this.handlePersonClass}
                        style={{ width: 100, margin: 10 }}
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
                        className="input"
                        value={this.state.alignment}
                        onChange={this.handleAlignment}
                        style={{ width: 100, margin: 10 }}
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
                        className="input"
                        style={{ width: 'auto', margin: 10 }}

                    />
                    <button className="submit" onClick={this.handleSubmit} variant="contained" >Submit</button>
                    <button className="delete" onClick={this.handleDelete} variant="contained" color="secondary" >Delete</button>


                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    character: state.character.characterPersonReducer,
    user: state.user,
});

export default connect(mapStateToProps)(EditCharacter);