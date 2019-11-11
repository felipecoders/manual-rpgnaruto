import React from "react";

import Container from "../../components/Container";
import Item from "../../components/Item";

import rolls from "../../services/rules/rolls";

export default function Rolls() {
  return rolls.map(roll => (
    <Container key={roll.name}>
      <Item>
        <h1>{roll.name}</h1>
        <p>{roll.description}</p>
      </Item>
    </Container>
  ));
}
