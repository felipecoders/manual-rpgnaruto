import React from "react";

import { Item } from "./styles";
import Container from "../../components/Container";

import points from "../../services/rules/points";

export default function Points() {
  const { genin, chunin, jonin, anbu, sanin, hokage } = points;
  const keys = Object.keys(genin);

  return (
    <Container>
      <Item>
        <h1>Genin</h1>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span>{key}</span>
              <span>{genin[key]}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>Chunin</h1>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span>{key}</span>
              <span>{chunin[key]}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>Jonin</h1>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span>{key}</span>
              <span>{jonin[key]}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>Anbu</h1>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span>{key}</span>
              <span>{anbu[key]}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>Sanin</h1>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span>{key}</span>
              <span>{sanin[key]}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>Hokage</h1>
        <div>
          {keys.map(key => (
            <div key={key}>
              <span>{key}</span>
              <span>{hokage[key]}</span>
            </div>
          ))}
        </div>
      </Item>
    </Container>
  );
}
