import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
import './App.css';

class App extends Component {
  addTrack(){
    this.props.onAddTrack(this.trackInput.value,this.trackInputURL.value);
    this.trackInput.value='';
    this.trackInputURL.value='';
  }
  findTrack() {
    console.log(this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }
  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <input type="text" ref={(input)=>{this.searchInput=input}} />
        <button onClick={this.findTrack.bind(this)}>Find track</button>
        <br/>
        Image name:<input type="text" ref={(input) => {this.trackInput=input;}} />
        Image URL:  <input type="text" ref={(input) => {this.trackInputURL=input;}} />
        <button onClick={this.addTrack.bind(this)}>Add Image</button>
        <br/>
        <button onClick={this.props.onGetTracks}>Get Images</button>

        <ul>
          {this.props.tracks.map((track,index)=>
            <li key={index}><img src={track.url} title={track.name} className='arts'/></li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(tracks=>tracks.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack:(name,url)=>{
      const payload={
        id: Number(Date.now()),
        name,
        url
      }
      dispatch({type:'ADD_TRACK',payload});
    },
    onFindTrack:(name)=>{
      dispatch({type:'FIND_TRACK',payload:name})
    },
    onGetTracks:()=>{
      dispatch(getTracks());
    }
  })
)(App);
