import React, { Component } from 'react'

export default class MembersList extends Component {
    render() {
        return (
            <div className="list-group text-center px-5 py-4 container d-flex bg-light justify-content-center shadow border border-light" style={{width:"400px", borderRadius:"20px"}}>
                {this.props.data.map(data=>{
                    return(
                        <button className="list-group-item list-group-item-action border border-light text-secondary" key={data.id} onClick={()=>this.props.handleClick(data.activity_periods)}>{data.real_name}</button>              
                    )
                })}
            </div>
        )
    }
}
