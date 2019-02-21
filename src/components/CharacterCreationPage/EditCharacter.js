import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

//this page consists the same form as create character page.
//The only difference is the removal of race input, const, and ability to edit race.

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


class EditCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character_id: this.props.user.id,
            character_name: '',
            gender: '',
            person_class: '',
            alignment: '',
            background: ''
        }
    }

    handleSubmit = () => {
        const action = { type: 'UPDATE_CHARACTER', payload: this.state }
        this.props.dispatch(action);
        this.props.history.push('/home');
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
                {/* {JSON.stringify(this.state)} */}
                
                <form>
                    <h2>Edit Character</h2>
                    <TextField
                        id="standard-name"
                        label="Character Name"
                        value={this.state.character_name}
                        onChange={this.handleCharacterName}
                        style={{ width: 200, margin: 10 }}
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
                        label="Race"
                        value={this.props.character.race}
                        id="disabled"
                        style={{ width: 200, margin: 10 }}
                        margin="normal"
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
                        style={{ width: 400, margin: 10 }}

                    />
                    <Button className="submit" onClick={this.handleSubmit} variant="contained" >Submit</Button>
                    <Button className="cancel" onClick={this.handleCancel} variant="contained" >Cancel</Button>
                    <Button className="delete" onClick={this.handleDelete} variant="contained" color="secondary" >Delete</Button>


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