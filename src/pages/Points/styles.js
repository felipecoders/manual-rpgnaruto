import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;

  & + div {
    border-top: 1px solid #333;
  }

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      width: 200px;
      display: inline-block;
      padding: 5px;

      & + span {
        width: auto;
      }
    }
  }
`;
