import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listSongs } from '../../graphql/queries';
import AddSong from './AddSong';
      

function SongsList(props) {
    const [state, setState] = useState(props);   
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        setState(props);
        
    }, [props, fetchSongs]);


    useEffect(() => {
    });

    async function fetchSongs() {

        const apiData = await API.graphql({ 
            query: listSongs,
            variables: {
                filter: {nextToken: state.group.songs.nextToken}
            }
         });
        const songsFromAPI = apiData.data.listSongs.items;
        await Promise.all(
            songsFromAPI.map(async (song) => {
           return song;
        })
      );
      setSongs(apiData.data.listSongs.items);
    }
    

    return (
      <div className="song-list">
        <AddSong group={state.group} />

        {
            songs.length > 0 && songs.map((song) => {
                return (
                <div key={song.id} className="song">
                    <h2>{song.title}</h2>
                    <h4>{song.grade}</h4>
                    <h4>{song.length}</h4>
                    <h4>Group name: {song.group.name}</h4>
                    <h4>{song.image}</h4>
                    <h4>{song.score}</h4>
                    <p>{[song.audio[0]]}</p>
                </div>
            );
          })}
      </div>
    );
};

export default SongsList;






  