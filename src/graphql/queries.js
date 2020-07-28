/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      song {
        items {
          id
          groupID
          grade
          title
          description
          length
          image
          score
          audio
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        song {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      groupID
      group {
        id
        name
        song {
          nextToken
        }
        createdAt
        updatedAt
      }
      grade
      title
      description
      length
      image
      score
      audio
      forSale {
        items {
          id
          songID
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        group {
          id
          name
          createdAt
          updatedAt
        }
        grade
        title
        description
        length
        image
        score
        audio
        forSale {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInventoryItem = /* GraphQL */ `
  query GetInventoryItem($id: ID!) {
    getInventoryItem(id: $id) {
      id
      songID
      song {
        id
        groupID
        group {
          id
          name
          createdAt
          updatedAt
        }
        grade
        title
        description
        length
        image
        score
        audio
        forSale {
          nextToken
        }
        createdAt
        updatedAt
      }
      price
      createdAt
      updatedAt
    }
  }
`;
export const listInventoryItems = /* GraphQL */ `
  query ListInventoryItems(
    $filter: ModelInventoryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        songID
        song {
          id
          groupID
          grade
          title
          description
          length
          image
          score
          audio
          createdAt
          updatedAt
        }
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTrack = /* GraphQL */ `
  query GetTrack($id: ID!) {
    getTrack(id: $id) {
      id
      title
      description
      image
      audio
      createdAt
      updatedAt
    }
  }
`;
export const listTracks = /* GraphQL */ `
  query ListTracks(
    $filter: ModelTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        audio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGuestAppearance = /* GraphQL */ `
  query GetGuestAppearance($id: ID!) {
    getGuestAppearance(id: $id) {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const listGuestAppearances = /* GraphQL */ `
  query ListGuestAppearances(
    $filter: ModelGuestAppearanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuestAppearances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        location
        contacts
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      userType
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userType
        email
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
