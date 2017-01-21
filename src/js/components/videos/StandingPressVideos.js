import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = '2yjwXTZQDDI';
const videoTwoId = 'CnBmiBqp-AI';

export default class StandingPressVideos extends React.Component {
  constructor(props) {
    super(props);
    console.log(YouTube);
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
      	<h2>Standing Press Videos</h2>
      	<h3>Beginner</h3>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
        <h3>Advanced</h3>
        <YouTube videoId={this.state.videoTwoId} onReady={this.onReady} />
      </div>
    );
  }
}

