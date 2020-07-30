import React, { Component } from 'react';

export default class AudioPlayer extends Component {
    

    render() {
        const { audio } = this.props.location.state;

        return <audio controls src={audio} autoPlay></audio>;
    }
}