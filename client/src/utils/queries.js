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