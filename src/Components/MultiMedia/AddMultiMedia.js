import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listTracks } from '../../graphql/queries';
import { createTrack as createTrackMutation } from '../../graphql/mutations';

const initialFormState = {
  title: '',
  description: '',
  image: '',
  audio: '',
};

function AddMultiMedia() {
  const [tracks, setTracks] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  async function createTrack() {
    if (!formData.title || !formData.description || !formData.audio) return;
    await API.graphql({
      query: createTrackMutation,
      variables: { input: formData },
    });
    if (formData.audio) {
      const audio = await Storage.get(formData.audio);
      formData.audio = audio;
    }
    setTracks([...tracks, formData]);
    setFormData(initialFormState);
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, audio: file.name });
    await Storage.put(file.name, file);
    this.props.fetchTracks();
  }

  return (
    <div className="multimedia add form">
      <input
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Track title"
        value={formData.title}
      />
      <textArea
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Track description"
        value={formData.description}
      ></textArea>
      <input type="file" onChange={onChange} />
      <button onClick={createTrack}>Add Track</button>
    </div>
  );
}

export default AddMultiMedia;
