import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ViewModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }


    render() {
        return (
            <div className="modal fade" id={"viewModal"+this.props.modalId} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">View User</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Name: <strong>{this.props.userData.currentUserName}</strong><hr></hr>
                        Email: <strong>{this.props.userData.currentUserEmail}</strong><hr></hr>
                        Status: <strong>{this.props.userData.currentUserStatus}</strong>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal;

