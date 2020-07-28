import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listTracks } from '../../graphql/queries';
import { deleteTrack as deleteTrackMutation } from '../../graphql/mutations';
import AddMultiMedia from './AddMultiMedia';
import multimediaImage from './film_multimedia.gif';
import './MultiMedia.css';

function MultiMedia() {
  const [tracks, setTracks] = useState([]);
  const currentUser = 'Admin';

  useEffect(() => {
    fetchTracks();
  }, []);

  async function fetchTracks() {
    const apiData = await API.graphql({ query: listTracks });
    const tracksFromAPI = apiData.data.listTracks.items;
    await Promise.all(
      tracksFromAPI.map(async (track) => {
        if (track.audio) {
          const audio = await Storage.get(track.audio);
          track.audio = audio;
        }
        return track;
      })
    );
    setTracks(apiData.data.listTracks.items);
  }

  async function deleteTrack({ id }) {
    const newTracksArray = tracks.filter((track) => track.id !== id);
    setTracks(newTracksArray);
    await API.graphql({
      query: deleteTrackMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="multimedia content">
      {currentUser === 'Admin' && <AddMultiMedia />}
      <div className="main-content">
        <h1>
          <img src={multimediaImage} alt="Film and multimedia" />
        </h1>

        <p className="textblock black">
          Music as a support for film and multimedia is a sensitive and
          individualized issue. Therefore it is difficult to post music here
          that will fit your project exactly because I don't yet understand the
          specific needs of your project. Nevertheless, a few general samples
          have been included for your convenience. To hear music that will work
          specifically for your project, contact me!
        </p>

        <div style={{ marginBottom: 30 }}>
          {tracks.map((track) => (
            <div key={track.id} className="film">
              <div className="film_pic"></div>
              <div class="film_desc">
                <h3>{track.title}</h3>
                <p className="textblock">{track.description}</p>
                <a className="play" href={track.audio}>
                    Play Track
                </a>
              </div>
              {currentUser === 'Admin' && (
                <button onClick={() => deleteTrack(track)}>Delete track</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultiMedia;
