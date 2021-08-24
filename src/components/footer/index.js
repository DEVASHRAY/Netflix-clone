import React, { Children } from "react";
import {
  Container,
  Title,
  Row,
  Column,
  Link,
  Break,
  Text,
} from "./footer-styles";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Footer.Row = ({ children, ...restProps }) => (
  <Row {...restProps}>{children}</Row>
);

Footer.Column = ({ children, ...restProps }) => (
  <Column {...restProps}>{children}</Column>
);

Footer.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Footer.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Footer.Break = ({ children, ...restProps }) => <Break />;
