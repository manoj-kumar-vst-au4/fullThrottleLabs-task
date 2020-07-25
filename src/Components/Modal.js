import React, { Component } from 'react'
import {Modal, CloseButton} from "react-bootstrap";

export default class Modals extends Component {
    render() {
        return (
            <div>
                <Modal  show={this.props.isShow} size="sm" onHide={()=>this.props.close}>
                    <Modal.Header>
                        <CloseButton onClick={this.props.close}></CloseButton>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <div>
                            <input type="date" className=" text-center mb-3 form-control border border-dark" onChange={this.props.handleChange}/>
                            {!this.props.selectedDate ? <label className="text-secondary">Select Date To See Records*</label>: !this.props.filterData[0]? <label className="text-danger">No Record Found***</label>: this.props.filterData.map(data=>{
                                let start = data.start_time.split(" ");
                                let end = data.end_time.split(" ");
                                return(
                                <div>
                                    <h6>User's Activity Timing</h6>
                                    <hr/>
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>From</th>
                                                <th>To</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td key={data.id}>{start[4]}</td>
                                                <td key={data.id}>{end[3]}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                )
                            })}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
