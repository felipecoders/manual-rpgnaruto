import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & + div {
    border-top: 1px solid #333;
    margin-top: 16px;
    padding-top: 16px;
  }

  h1 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin-bottom: 20px;
    color: #656565;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      width: 100px;
      display: inline-block;
      padding: 5px;

      & + span {
        width: auto;
      }
    }
  }

  > table {
    max-width: 500px;

    td {
      padding: 4px;
    }
  }
`;
