import React, { Component } from 'react';
import Thead from './Thead'
import Tbody from './Tbody'

class Table extends Component {
    render() {
        return(
            <div className="table-responsive mb-3">
                <table className="table table-bordered">
                    <Thead>
                        <tr>
                            {Object.keys(this.props.data).map((item, index) => {
                                return (
                                    <th>{item}</th>
                                )
                            })}
                        </tr>
                    </Thead>
                    
                    <Tbody>
                        <tr>
                            {Object.keys(this.props.data).map((item, index) => {
                                return (
                                    <td>{this.props.data[item]}</td>
                                )
                            })}
                        </tr>
                    </Tbody>
                </table>
            </div>
        );
    }
}

export default Table;