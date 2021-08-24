import React from "react";
import { Jumbotron } from "./components";
import { AccordionContainer } from "./containers/accordion";
import { FooterContainer } from "./containers/footer";
import * as ROUTES from "./constants/routes";

import { JumbotronContainer } from "./containers/jumbotron";
import JumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}

export default App;
