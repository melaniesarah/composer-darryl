import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listTracks } from '../../graphql/queries';
import AddMultiMedia from './AddMultiMedia';
import Track from './Track';
import multimediaImage from './film_multimedia.gif';
import './MultiMedia.css';

function MultiMediaList() {
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

  return (
    <div className="multimedia content">
      <div className="main-content">
        {currentUser === 'Admin' && <AddMultiMedia />}
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
          {
            tracks.map((track) => {
              return (
                <Track key={track.id} track={track} />
              );
            })
        }
        </div>
      </div>
    </div>
  );
}

export default MultiMediaList;
