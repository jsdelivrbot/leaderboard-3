import React, { Component } from 'react';
import axios from 'axios';
import MDSpinner from 'react-md-spinner';

import CamperList from './camper_list';

export default class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    recentCampers: [],
    allTimeCampers: [],
    currentView: 'recentCampers'
  };
}

  componentWillMount() {
    // make concurrent requests and set state to response
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {

        this.setState({
          recentCampers: recentCampers.data,
          allTimeCampers: allTimeCampers.data
        });
      }));
    }

fetchRecentCampers(){
  return axios.get('https://forum.freecodecamp.org/u?asc=true&period=monthly');
}

fetchAllTimeCampers(){
  return axios.get('https://forum.freecodecamp.org/u?asc=true&period=all');
}
changeView(currentView){
  this.setState({currentView});
}



  render() {
    if (!this.state.recentCampers.length && !this.state.allTimeCampers.length){
      return <MDSpinner  className="spinnr" size= {25}/>
    }
    return (
      <div>
      <h1>{`Free Code Camp Top Leaders`}</h1>
      <button onClick={() => this.changeView('recentCampers')} className="btn btn-primary">Recent</button>
      <button onClick={() => this.changeView('allTimeCampers')} className="btn btn-primary">All Time</button>
      <CamperList campers = {this.state[this.state.currentView]} />
      </div>
    );
  }
}
