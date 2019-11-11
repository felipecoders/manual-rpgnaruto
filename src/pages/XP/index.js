import React from "react";

import Container from "../../components/Container";
import Item from "../../components/Item";

import xp from "../../services/rules/xp";

export default function XP() {
  return xp.map(type => (
    <Container key={type.name}>
      <Item>
        <h1>{type.name}</h1>
        <table>
          <tbody>
            {type.values.map(value => (
              <tr key={value}>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Item>
    </Container>
  ));
}
