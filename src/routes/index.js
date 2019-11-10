import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import Antecedent from "../pages/Antecedent";
import Attributes from "../pages/Attributes";
import BenefitsClas from "../pages/BenefitsClas";
import VirtudesFlaws from "../pages/VirtudesFlaws";
import Points from "../pages/Points";
import Rolls from "../pages/Rolls";
import XP from "../pages/XP";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/antecedent" component={Antecedent} />
      <Route path="/attributes" component={Attributes} />
      <Route path="/benefitsclas" component={BenefitsClas} />
      <Route path="/virtudes-flaws" component={VirtudesFlaws} />
      <Route path="/points" component={Points} />
      <Route path="/rolls" component={Rolls} />
      <Route path="/xp" component={XP} />
    </Switch>
  );
}
