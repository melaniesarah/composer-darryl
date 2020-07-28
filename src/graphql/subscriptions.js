/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
export const onCreateInventoryItem = /* GraphQL */ `
  subscription OnCreateInventoryItem {
    onCreateInventoryItem {
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
export const onUpdateInventoryItem = /* GraphQL */ `
  subscription OnUpdateInventoryItem {
    onUpdateInventoryItem {
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
export const onDeleteInventoryItem = /* GraphQL */ `
  subscription OnDeleteInventoryItem {
    onDeleteInventoryItem {
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
export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack {
    onCreateTrack {
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
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack {
    onUpdateTrack {
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
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack {
    onDeleteTrack {
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
export const onCreateGuestAppearance = /* GraphQL */ `
  subscription OnCreateGuestAppearance {
    onCreateGuestAppearance {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGuestAppearance = /* GraphQL */ `
  subscription OnUpdateGuestAppearance {
    onUpdateGuestAppearance {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGuestAppearance = /* GraphQL */ `
  subscription OnDeleteGuestAppearance {
    onDeleteGuestAppearance {
      id
      location
      contacts
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
