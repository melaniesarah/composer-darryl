import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { useRouteMatch } from 'react-router-dom';
import { createGroup as createGroupMutation } from '../../graphql/mutations';
//import { createSong as createSongMutation } from '../../graphql/mutations';
//import { createInventoryItem as createInventoryMutation } from '../../graphql/mutations';
import { listGroups, listSongs, listInventoryItems } from '../../graphql/queries';

// const initialFormState = {
//   name: ''
// };

function Groups() {
  const [groups, setGroups] = useState([]);
  // const [formData, setFormData] = useState(initialFormState);

  const match = useRouteMatch('/groups/:groupName');
  const groupName = match.params.groupName;

  useEffect(() => {
    fetchGroups();
  }, []);

  async function fetchGroups() {
    const apiData = await API.graphql({ query: listGroups });
    const groupsFromAPI = apiData.data.listGroups.items;
    await Promise.all(
      groupsFromAPI.map(async (group) => {
        return group;
      })
    );
    setGroups(apiData.data.listGroups.items);
  }

  async function createGroup() {
    await API.graphql({
      query: createGroupMutation,
      variables: { input: {name: groupName} },
    });
  }
  

  return (
    <div className="groups content">
      <button name={groupName} onClick={createGroup}>
        Create group {groupName}
      </button>
      {groups.map(group => {
        return <h1 key={group.id}>{group.name}</h1>
      })}
    </div>
  );
}

export default Groups;
