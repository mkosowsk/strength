import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = 'nFAscG0XUNY';
const videoTwoId = 'bs_Ej32IYgo';

export default class SquatVideos extends React.Component {
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
      	<h2>Squat Videos</h2>
      	<h3>Beginner</h3>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
        <h3>Advanced</h3>
        <YouTube videoId={this.state.videoTwoId} onReady={this.onReady} />
      </div>
    );
  }
}

