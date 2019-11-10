import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 48px;
  padding: 4px;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  position: relative;

  img {
    height: 100%;
  }

  > button {
    background: #333;
    padding: 5px 7px;
    right: 5px;
    position: absolute;
    border: 0;
    border-radius: 4px;
  }
`;

export const Sidebar = styled.nav`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background: #f2a30b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.status ? "scale(1)" : "scale(0)")};

  > button {
    background: #f2a30b;
    padding: 5px 7px;
    top: 5px;
    right: 5px;
    position: absolute;
    border: 0;
    border-radius: 4px;
  }

  ul {
    margin: 50px 0;
    width: 400px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    li {
      font-size: 24px;
      padding: 8px;
      border-radius: 4px;
      color: #333;
      text-align: center;

      &:hover {
        background: #333;
        color: #f2a30b;
      }
    }

    > * + * {
      margin-top: 10px;
    }
  }
`;
