import React, { useState } from 'react';
// import { API, Storage } from 'aws-amplify';
// import { createTrack as createTrackMutation } from '../../graphql/mutations';

const initialFormState = {
  title: '',
  description: '',
  image: '',
  audio: '',
};

function AddMultiMedia() {
  const [formData, setFormData] = useState(initialFormState);

  async function createTrack() {
    if (!formData.title || !formData.description || !formData.audio) return;
    // await API.graphql({
    //   query: createTrackMutation,
    //   variables: { input: formData },
    // });
    if (formData.audio) {
      const audio = await Storage.get(formData.audio);
      formData.audio = audio;
    }

    setFormData(initialFormState);
    document.getElementsByName("file").files = null;
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, audio: file.name });
    await Storage.put(file.name, file);
  }

  return (
    <div className="multimedia add form" style={{border: '1px solid black'}}>
      <h2>Add Media</h2>
      <label for="title">Title: </label>
      <input
        name="title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        value={formData.title}
      />
      <label for="description">Description: </label>
      <textArea
        name="description"
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      >
      {formData.description}
      </textArea>
      <label for="file">Audio: </label>
      <input type="file" name="file" onChange={onChange} />
      <button onClick={createTrack}>Add Track</button>
    </div>
  );
}

export default AddMultiMedia;
