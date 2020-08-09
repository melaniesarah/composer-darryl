import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { useRouteMatch } from 'react-router-dom';
import { listGroups } from '../../graphql/queries';
import SongsList  from './SongsList';

function Groups() {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({});

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
    
      
      useEffect(() => {
        getGroup();
      });
    
    function getGroup() {
      const currentGroup = groups.filter(group => {
      return group.name === groupName;
    });
    console.log({...currentGroup[0]});
    setGroup(currentGroup[0]);
  }

  
  return (
    <div className="groups content">
      {groups.map((group) => {
        return (
          <div key={group.id} className="groups main-content">
            <h2>{group.name}</h2>
            <h3>{group.id}</h3>
          </div>
        );
      })}

      <SongsList group={group} />

      
    </div>
  );
}

export default Groups;
