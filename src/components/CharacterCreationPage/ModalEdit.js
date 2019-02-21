import EditCharacter from './EditCharacter';
import Button from '@material-ui/core/Button';
import React from 'react';
import Popup from 'reactjs-popup';

const ModalEdit = () => (
    <Popup trigger={<button className="edit"> Edit</button>} modal>
        {close => (
            <div className="modal">
                <a className="close" onClick={close}>
                    &times;
        </a>
                <div className="content">
                    {' '}
                    <EditCharacter />
                </div>
                    <Button
                        className="cancel"
                        onClick={() => { close() }}>  Close </Button>
                </div>
        )}
    </Popup>
)

export default ModalEdit;