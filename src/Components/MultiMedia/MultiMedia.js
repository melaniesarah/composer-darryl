import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listTracks } from '../../graphql/queries';
import { deleteTrack as deleteTrackMutation } from '../../graphql/mutations';
import AddMultiMedia from './AddMultiMedia';

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
    <div className="multimedia">
      <h1>Film and MultiMedia</h1>
      <p className="multimedia description">
        Music as a support for film and multimedia is a sensitive and
        individualized issue. Therefore it is difficult to post music here that
        will fit your project exactly because I don't yet understand the
        specific needs of your project. Nevertheless, a few general samples have
        been included for your convenience. To hear music that will work
        specifically for your project, contact me!
      </p>

      {currentUser === 'Admin' && <AddMultiMedia fetchTracks={fetchTracks} />}

      <div style={{ marginBottom: 30 }}>
        {tracks.map((track) => (
          <div key={track.id || track.title}>
            <h2>{track.title}</h2>
            <p>{track.title}</p>
            {currentUser === 'Admin' && (
              <button onClick={() => deleteTrack(track)}>Delete track</button>
            )}

            {track.audio && (
              <audio controls>
                <source src={track.audio} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiMedia;
