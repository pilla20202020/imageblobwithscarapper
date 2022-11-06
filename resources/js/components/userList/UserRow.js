import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Action from './Action';

class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }


    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.status}</td>
                <td>    
                    <Action eachRowId={this.props.data.id}/>

                </td>
            </tr>
        )
    }
}

export default TableRow;

