import React from 'react';
import { useRouteMatch } from 'react-router-dom';


function Groups() {
  let match = useRouteMatch('/groups/:groupName');
  return <h2>I'm your Group: {match.params.groupName}</h2>;
}

export default Groups;
