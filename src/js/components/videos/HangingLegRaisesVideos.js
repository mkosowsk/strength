import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from './YouTube';

const videoOneId = 'hdng3Nm1x_E';

export default class HangingLegRaisesVideos extends React.Component {
  constructor(props) {
    super(props);
    console.log(YouTube);
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
      	<h2>Hanging Leg Raises Video</h2>
        <YouTube videoId={this.state.videoOneId} onReady={this.onReady} />
      </div>
    );
  }
}

