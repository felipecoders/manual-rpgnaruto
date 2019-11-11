import React from "react";

import Container from "../../components/Container";
import Item from "../../components/Item";
import Title from "../../components/Title";

import virtudes from "../../services/rules/virtudes";
import flaws from "../../services/rules/flaws";

export default function VirtudesFlaws() {
  return (
    <>
      <Container>
        <Title>Vantagens</Title>
        {virtudes.map(virtude => (
          <Item key={virtude.name}>
            <h1>
              {virtude.name}. custo {virtude.coast.join(" - ")}
            </h1>
            <p>{virtude.description}</p>
          </Item>
        ))}
      </Container>
      <Container>
        <Title>Desvantagens</Title>
        {flaws.map(flaw => (
          <Item key={flaw.name}>
            <h1>
              {flaw.name}. custo {flaw.coast.join(" - ")}
            </h1>
            <p>{flaw.description}</p>
          </Item>
        ))}
      </Container>
    </>
  );
}
