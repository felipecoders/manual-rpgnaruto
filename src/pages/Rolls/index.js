import React from "react";

import { Item } from "./styles";
import Container from "../../components/Container";

import rolls from "../../services/rules/rolls";

export default function Rolls() {
  return (
    <Container>
      {rolls.map(roll => (
        <Item key={roll.name}>
          <h1>{roll.name}</h1>
          <p>{roll.description}</p>
        </Item>
      ))}
    </Container>
  );
}
