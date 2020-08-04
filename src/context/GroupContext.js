import React from 'react';

const GroupContext = React.createContext({});

export const GroupProvider = GroupContext.Provider;
export const GroupConsumer = GroupContext.Consumer;