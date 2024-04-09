import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;
export default GET_BOOKS;
