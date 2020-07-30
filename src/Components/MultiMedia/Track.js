import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { deleteTrack as deleteTrackMutation } from '../../graphql/mutations';


function Track(props) {
    const currentUser = "Admin";

    const deleteTrack = async ({ id }) => {
        await API.graphql({
            query: deleteTrackMutation,
            variables: { input: { id } },
        });
    };

    return (
        <div  className="film">
            <div className="film_pic"></div>
            <div class="film_desc">
            <h3>{props.track.title}</h3>
            <p className="textblock">{props.track.description}</p>
            <Link className="play"
                to={{
                    pathname: "/audioplayer",
                    state: {
                        audio: props.track.audio
                    }
                }} 
            >Play Track</Link>
            </div>
            {currentUser === 'Admin' && (
            <button onClick={() => deleteTrack(props.track)}>Delete track</button>
            )}
        </div>
        ); 
}

export default Track;