import { gql } from "@apollo/client";

export const GET_MENUS = gql`
  query GET_MENUS {
    menuItems(where: {location: PRIMARY, parentId: "0"}) {
      edges {
        node {
          id
          url
          cssClasses
          label
          path
        }
      }
    }
  }
`;