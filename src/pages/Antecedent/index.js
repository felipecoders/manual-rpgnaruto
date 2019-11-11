import React from "react";

import Container from "../../components/Container";
import Item from "../../components/Item";

import antecedents from "../../services/rules/antecedent";

export default function Antecedent() {
  return antecedents.map(({ name, description, values, postvalues }) => (
    <Container key={name}>
      <h1>{name}</h1>
      <Item>
        <p>{description}</p>
        {values && (
          <table>
            <tbody>
              {values.map((value, i) => (
                <tr key={i}>
                  <td>{i + 1}pt</td>
                  <td>
                    {value} {postvalues}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Item>
    </Container>
  ));
}
