import React from "react";

import Container from "../../components/Container";

export default function Downloads() {
  return (
    <Container>
      <h3>frontal</h3>
      <p>
        <a href="/download/basic.pdf">basic</a>
      </p>
      <p>
        <a href="/download/custom-generic.pdf">generic</a>
      </p>
      <p>
        <a href="/download/custom-madara">madara</a>
      </p>

      <h3>trazeira</h3>
      <p>
        <a href="/download/backside.pdf">backside</a>
      </p>
    </Container>
  );
}
