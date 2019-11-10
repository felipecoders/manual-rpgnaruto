import React from "react";

import { Item } from "./styles";
import Container from "../../components/Container";

import antecedent from "../../services/rules/antecedent";

export default function Antecedent() {
  const [ally, resources, status, fame, mentor, contacts] = antecedent;

  return (
    <Container>
      <Item>
        <h1>{ally.name}</h1>
        <p>{ally.description}</p>
        <div>
          {ally.values.map((value, i) => (
            <div>
              <span>{i + 1}pt</span>
              <span>{value} Aliados</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>{resources.name}</h1>
        <p>{resources.description}</p>
        <div>
          {resources.values.map((value, i) => (
            <div>
              <span>{i + 1}pt</span>
              <span>{value} Yenes</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>{status.name}</h1>
        <p>{status.description}</p>
        <div>
          {status.values.map((value, i) => (
            <div>
              <span>{i + 1}pt</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>{fame.name}</h1>
        <p>{fame.description}</p>
        <div>
          {fame.values.map((value, i) => (
            <div>
              <span>{i + 1}pt</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>{mentor.name}</h1>
        <p>{mentor.description}</p>
        <div>
          {mentor.values.map((value, i) => (
            <div>
              <span>{i + 1}pt</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </Item>
      <Item>
        <h1>{contacts.name}</h1>
        <p>{contacts.description}</p>
      </Item>
    </Container>
  );
}
