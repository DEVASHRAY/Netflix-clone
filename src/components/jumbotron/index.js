import React from "react";
import { Inner } from "./jumbotron-styles";

export default function Jumbotron({ children, ...restProps }) {
  return (
    <>
      <Inner>I am JUMBO</Inner>
    </>
  );
}
