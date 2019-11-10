import React from "react";

import { Item, Title } from "./styles";
import Container from "../../components/Container";

import attributes from "../../services/rules/attributes";

export default function Attributes() {
  const [physical, social, mental] = attributes;

  return (
    <>
      <Container>
        <Title>{physical.name}</Title>
        {physical.attributes.map(attr => (
          <Item key={attr.name}>
            <h1>{attr.name}</h1>
            <p>{attr.description}</p>
          </Item>
        ))}
      </Container>
      <Container>
        <Title>{social.name}</Title>
        {social.attributes.map(attr => (
          <Item key={attr.name}>
            <h1>{attr.name}</h1>
            <p>{attr.description}</p>
          </Item>
        ))}
      </Container>
      <Container>
        <Title>{mental.name}</Title>
        {mental.attributes.map(attr => (
          <Item key={attr.name}>
            <h1>{attr.name}</h1>
            <p>{attr.description}</p>
          </Item>
        ))}
      </Container>
    </>
  );
}
