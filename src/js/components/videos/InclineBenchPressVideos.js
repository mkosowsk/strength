import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = 'DbFgADa2PL8';

export default class InclineBenchPressVideos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoOneId: videoOneId,
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
        <h2>Incline Bench Press Video</h2>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
      </div>
    );
  }
}

