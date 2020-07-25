import React, { Component } from 'react'
import Data from "./data.json";
import MemberList from "./Components/MembersList";
import Modal from "./Components/Modal";

export default class App extends Component {

  state={
    data:Data.members,
    currentActivity: [],
    isShow: false,
    selectedDate:"",
    filterData:[]
  }

  handleClick=(data)=>{
    this.setState({
      currentActivity: data,
      isShow: true
    })
  }

  handleChange=async(e)=>{
    await this.setState({
      selectedDate: e.target.value
    })

    let date = this.state.selectedDate.split("-");
    let monthNumber = date[1];
    //function to convert monthnumber into month name
    const monthName=()=>{
      let months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months[monthNumber-1];
    }
    // function to remove 0 from 0th index of date
    const updateDay=()=>{
      let day = date[2];
      while(day.charAt(0) === '0')
        {
          day = day.substr(1);
        }
      return day;
    }
    let newDate =  monthName()+" "+updateDay()+" "+date[0];
    let filteredData = this.state.currentActivity.filter(data=>{
      let start = data.start_time.toLowerCase();
      return start.indexOf(newDate.toString().toLocaleLowerCase()) === 0;
    })
    this.setState({
      filterData: filteredData
    })
  }

  close=()=>{
    this.setState({
      isShow: false,
      selectedDate: "",
      filterData: []
    })
  }
  render() {
    return (
      <div>
        <h2 className="text-center my-2 text-secondary">Members List</h2>
        <hr/>
        <Modal
          isShow={this.state.isShow}
          close={this.close}
          handleChange={this.handleChange}
          filterData={this.state.filterData}
          selectedDate={this.state.selectedDate}
        />
        <MemberList
          data={this.state.data}
          handleClick={this.handleClick}

        />
      </div>
    )
  }
}
