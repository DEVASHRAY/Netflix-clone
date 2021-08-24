import React from "react";
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./jumbotron-styles";

export default function Jumbotron({ children, ...restProps }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

Jumbotron.Inner = function JumbotronInner({
  children,
  direction,
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Jumbotron.Image = ({ src, alt, ...restProps }) => (
  <Image src={src} alt={alt} {...restProps} />
);
