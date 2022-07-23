import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
      _id
      name
      projectId
      image
      htmlUrl
      deployedUrl
      topics 
    }
  }
`;

export const QUERY_RESPONSES = gql`
  query allResponses {
    allResponses {
      _id
      name
      email
      message
    }
  }
`;