import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingCero(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline){
    const time    = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours   = Math.floor(time/(1000*60*60) % 24);
    const days    = Math.floor(time/(1000*60*60*24));

    this.setState({
      days,
      hours ,
      minutes,
      seconds
    })
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return(
        <div>
          <div className="Clock-days">{ this.leadingCero(days) } days</div>
          <div className="Clock-hours">{ this.leadingCero(hours) } hours</div>
          <div className="Clock-minutes">{ this.leadingCero(minutes) } minutes</div>
          <div className="Clock-seconds">{ this.leadingCero(seconds) } seconds</div>
        </div>
    )
  }
}
export default Clock;
