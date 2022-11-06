import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class EditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            userEmail: null,
            userStatus: null,
        }
    }

    updateUserData = () => {

    }

    // Updating user name
    inputUserName = (event) => {
        this.setState({
            userName: event.target.value,
        });
    }

    // Updating user email
    inputUserEmail = (event) => {
        this.setState({
            userEmail: event.target.value,
        });
    }

    // Updating user Status
    inputUserStatus = (event) => {
        this.setState({
            userStatus: event.target.value,
        });
    }


    render() {
        return (
            <div className="modal fade"  id={"editModal"+this.props.modalId} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form'>
                            <div className='form-group'>
                                Name: <input type="text" id="employeeName" value={this.state.userName ?? ""} onChange={this.inputUserName}></input>

                            </div>


                            <div className='form-group'>
                                Email: <input type="text" id="employeeEmail" value={this.state.userEmail ?? ""} onChange={this.inputUserEmail}></input>

                            </div>

                            <div className='form-group'>
                                Status: <input type="text" id="employeeStatus" value={this.state.userStatus ?? ""}  onChange={this.inputUserStatus}></input>

                            </div>
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" onClick={this.updateUserData}>Update</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal;

