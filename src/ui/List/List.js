import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  width: 85%;
  padding-inline-start: 0;
  margin: auto auto 20px auto;
  @media (max-width: 550px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;

export default List;
