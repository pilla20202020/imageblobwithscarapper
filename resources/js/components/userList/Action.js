import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditModal from './Modal/EditModal';
import ViewModal from './Modal/ViewModal';


class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserName: null,
            currentUserEmail: null,
            currentUserStatus: null,
        }
    }


    // Getting Individual User Data
    getUserDetails = (id) => {
        axios.post('/user/detail', {
            userId: id
        }).then((response) => {
            this.setState({
                currentUserName: response.data.name,
                currentUserEmail: response.data.email,
                currentUserStatus: response.data.status,
            })
        })
    }
    


    render() {
        return (
            <div className='btn-group' role="group">

                <button className="btn btn-info ink-reaction btn-sm mr-2" href="" data-bs-toggle="modal" data-bs-target={'#viewModal'+this.props.eachRowId} onClick={() => {this.getUserDetails(this.props.eachRowId)}}>
                    <i className="md md-add"></i>
                    View
                </button>
                <ViewModal modalId={this.props.eachRowId } userData={this.state}/>

                <button className="btn btn-primary ink-reaction btn-sm mr-2" href="" data-bs-toggle="modal" data-bs-target={'#editModal'+this.props.eachRowId} onClick={() => {this.getUserDetails(this.props.eachRowId)}}>
                    <i className="md md-add"></i>
                    Edit
                </button>
                <EditModal modalId={this.props.eachRowId } userData={this.state}/>

            

                <button className="btn btn-danger ink-reaction btn-sm" href="">
                    <i className="md md-add"></i>
                    Delete
                </button>

            </div>

            

            
            
        )
    }
}

export default Action;

