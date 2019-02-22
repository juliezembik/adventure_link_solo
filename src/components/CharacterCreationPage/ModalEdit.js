import EditCharacter from './EditCharacter';
import Button from '@material-ui/core/Button';
import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';


//ModalEdit helps bring up a popup that prevents user from moving away from
//the original character page so that users can see the change in their character profile.
const ModalEdit = () => (
    <Popup trigger={<button className="edit"> Edit</button>} modal>
        {close => (
            <div className="modal">
                <div className="content">
                    {' '}
                    <EditCharacter />
                </div>
                    <Button
                        className="cancel"
                        onClick={() => { close() }}>  Cancel </Button>
                </div>
        )}
    </Popup>
)

export default ModalEdit;