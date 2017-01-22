import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = 'Iwe6AmxVf7o';

export default class HighCableChestFlyVideos extends React.Component {
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
      	<h2>High Cable Chest Fly Video</h2>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
      </div>
    );
  }
}

