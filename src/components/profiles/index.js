import React from "react";
import { Container, Title, List, Item, Picture, Name } from "./profiles-styles";

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Profiles.List = ({ children, ...restProps }) => (
  <List {...restProps}>{children}</List>
);

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
