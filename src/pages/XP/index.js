import React from "react";

import { Item } from "./styles";
import Container from "../../components/Container";

import xp from "../../services/rules/xp";

export default function XP() {
  return (
    <Container>
      {xp.map(type => (
        <Item key={type.name}>
          <h1>{type.name}</h1>
          <div>
            {type.values.map(value => (
              <span>{value}</span>
            ))}
          </div>
        </Item>
      ))}
    </Container>
  );
}
