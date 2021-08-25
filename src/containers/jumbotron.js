import React from "react";
import { Jumbotron } from "../components";
import JumboData from "../fixtures/jumbo.json";

export function JumbotronContainer() {
  return (
    <>
      {JumboData.map((jumbo) => (
        <Jumbotron key={jumbo.id}>
          <Jumbotron.Inner direction={jumbo.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>

            <Jumbotron.Pane>
              <Jumbotron.Image src={jumbo.image} alt={jumbo.alt} />
            </Jumbotron.Pane>
          </Jumbotron.Inner>
        </Jumbotron>
      ))}
    </>
  );
}
