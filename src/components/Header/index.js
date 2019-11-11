import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

import { Container, Sidebar } from "./styles";

import logo from "../../assets/logo.png";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Container>
      <img src={logo} alt="Naruto" />

      <button type="button" onClick={() => setSidebar(true)}>
        <FaBars size={16} color="#f2a30b" />
      </button>

      <Sidebar status={sidebar}>
        <button type="button" onClick={() => setSidebar(false)}>
          <FaTimes size={36} color="#333" />
        </button>
        <ul>
          <Link to="/antecedent">
            <li onClick={() => setSidebar(false)}>Antecedente</li>
          </Link>
          <Link to="/attributes">
            <li onClick={() => setSidebar(false)}>Attributos</li>
          </Link>
          <Link to="/benefitsclas">
            <li onClick={() => setSidebar(false)}>Beneficios dos clãs</li>
          </Link>
          <Link to="/virtudes-flaws">
            <li onClick={() => setSidebar(false)}>Vantagens e Desvantagens</li>
          </Link>
          <Link to="/points">
            <li onClick={() => setSidebar(false)}>Pontos</li>
          </Link>
          <Link to="/rolls">
            <li onClick={() => setSidebar(false)}>Rolagens</li>
          </Link>
          <Link to="/xp">
            <li onClick={() => setSidebar(false)}>XP</li>
          </Link>
        </ul>
      </Sidebar>
    </Container>
  );
}
