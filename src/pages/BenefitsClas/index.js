import React from "react";

import Container from "../../components/Container";
import Item from "../../components/Item";

import benefits from "../../services/rules/benefits_clas";

export default function BenefitsClas() {
  return benefits.map(benefit => (
    <Container key={benefit.name}>
      <Item key={benefit.name}>
        <h1>{benefit.name}</h1>
        <table>
          <tbody>
            {benefit.details.map((value, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Item>
    </Container>
  ));

  // return (
  //   <Container>
  //     {benefits.map(benefit => (
  //       <Item key={benefit.name}>
  //         <h1>{benefit.name}</h1>
  //         <div>
  //           {benefit.details.map((value, i) => (
  //             <div key={i}>
  //               <span>{i + 1}</span>
  //               <span>{value}</span>
  //             </div>
  //           ))}
  //         </div>
  //       </Item>
  //     ))}
  //   </Container>
  // );
}
