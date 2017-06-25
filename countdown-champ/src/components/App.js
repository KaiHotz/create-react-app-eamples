import React, { Component } from 'react';
import Clock from './Clock';
import '../styles/app.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline(){
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    const { deadline, newDeadline } = this.state;
    return(
      <div className="App">
        <h1>Countdown to { deadline }</h1>
        <Clock
        deadline={ deadline }/>
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={ event => this.setState({newDeadline: event.target.value})}/>
          <Button onClick={ () => this.changeDeadline() }>Submit</Button>
        </Form>
      </div>
    )
  }

}

export default App;
