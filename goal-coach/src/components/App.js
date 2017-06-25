import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut()
    .then(this.props.history.push('/signin'))
  }

  render() {
    return (
      <div className="App" style={{margin: '5px'}}>
          <h3>Goals Coach</h3>
          <AddGoal />
          <hr />
          <h4>Goals</h4>
          <GoalList />
          <hr />
          <h4>Comleted Goals</h4>
          <CompleteGoalList />
          <hr />
          <button
            className="btn btn-danger"
            onClick={() => this.signOut()}
          >
            Sign Out
          </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('Sate in App: ',state)
  return {}
}

export default connect(mapStateToProps, null)(App);
