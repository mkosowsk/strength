import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = '7Q_GnXm7LbI';
const videoTwoId = 'Y1IGeJEXpF4';

export default class DeadliftVideos extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoOneId: videoOneId,
      videoTwoId: videoTwoId,
      player: null,
    };

    this.onReady = this.onReady.bind(this);
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  render() {
    return (
      <div>
      	<h2>Deadlift Videos</h2>
      	<h3>Beginner</h3>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
        <h3>Advanced</h3>
        <YouTube videoId={this.state.videoTwoId} onReady={this.onReady} />
      </div>
    );
  }
}

