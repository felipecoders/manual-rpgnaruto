import React from "react";

import Container from "../../components/Container";
import Item from "../../components/Item";

import points from "../../services/rules/points";

export default function Points() {
  const ranks = Object.keys(points);
  const fields = Object.keys(points[ranks[0]]);

  return ranks.map(rank => (
    <Container key={rank}>
      <Item>
        <h1>{rank}</h1>
        <table>
          <tbody>
            {fields.map(field => (
              <tr key={field}>
                <td>{field}</td>
                <td>{points[rank][field]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Item>
    </Container>
  ));
}
