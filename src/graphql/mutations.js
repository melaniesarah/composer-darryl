/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createInventoryItem = /* GraphQL */ `
  mutation CreateInventoryItem(
    $input: CreateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    createInventoryItem(input: $input, condition: $condition) {
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
export const updateInventoryItem = /* GraphQL */ `
  mutation UpdateInventoryItem(
    $input: UpdateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    updateInventoryItem(input: $input, condition: $condition) {
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
export const deleteInventoryItem = /* GraphQL */ `
  mutation DeleteInventoryItem(
    $input: DeleteInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    deleteInventoryItem(input: $input, condition: $condition) {
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
export const createTrack = /* GraphQL */ `
  mutation CreateTrack(
    $input: CreateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    createTrack(input: $input, condition: $condition) {
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
export const updateTrack = /* GraphQL */ `
  mutation UpdateTrack(
    $input: UpdateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    updateTrack(input: $input, condition: $condition) {
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
export const deleteTrack = /* GraphQL */ `
  mutation DeleteTrack(
    $input: DeleteTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    deleteTrack(input: $input, condition: $condition) {
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
export const createGuestAppearance = /* GraphQL */ `
  mutation CreateGuestAppearance(
    $input: CreateGuestAppearanceInput!
    $condition: ModelGuestAppearanceConditionInput
  ) {
    createGuestAppearance(input: $input, condition: $condition) {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const updateGuestAppearance = /* GraphQL */ `
  mutation UpdateGuestAppearance(
    $input: UpdateGuestAppearanceInput!
    $condition: ModelGuestAppearanceConditionInput
  ) {
    updateGuestAppearance(input: $input, condition: $condition) {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const deleteGuestAppearance = /* GraphQL */ `
  mutation DeleteGuestAppearance(
    $input: DeleteGuestAppearanceInput!
    $condition: ModelGuestAppearanceConditionInput
  ) {
    deleteGuestAppearance(input: $input, condition: $condition) {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
