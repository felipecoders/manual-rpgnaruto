import React from "react";

import { Item } from "./styles";
import Container from "../../components/Container";

import benefits from "../../services/rules/benefits_clas";

export default function BenefitsClas() {
  return (
    <Container>
      {benefits.map(benefit => (
        <Item key={benefit.name}>
          <h1>{benefit.name}</h1>
          <div>
            {benefit.details.map((value, i) => (
              <div>
                <span>{i + 1}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </Item>
      ))}
    </Container>
  );
}
