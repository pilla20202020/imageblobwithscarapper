import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableRow from './UserRow';

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    // Life cycle Method.
    componentDidMount() {
        this.getUsersList();
    }

    // Get User List
    getUsersList = () => {
        let self = this;
        axios.get('/user/userlist').then(function(response) {
            self.setState({
                users: response.data
            })
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col" width="100px">S.N.</th>
                                <th scope="col" width="100px">Name</th>
                                <th scope="col" width="100px">Email</th>
                                <th scope="col" width="100px">Status</th>
                                <th scope="col" width="100px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(function(x, i){
                                    return <TableRow key={i} data={x}/>
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );

    }
}



export default Table;

