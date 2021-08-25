import React from "react";
import { Background, Container, Logo, ButtonLink } from "./Header-styles";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Logo = ({ to, ...restProps }) => (
  <ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>
);

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
