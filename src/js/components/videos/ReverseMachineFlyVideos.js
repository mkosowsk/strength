import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = 'o5OvdIVV61M';

export default class ReverseMachineFlyVideos extends React.Component {
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
      	<h2>Reverse Machine Fly Video</h2>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
      </div>
    );
  }
}

