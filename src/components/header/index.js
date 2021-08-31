import React, { useState } from "react";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallout,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./Header-styles";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
);

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((prev) => !prev)}>
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallout = function HeaderFeatureCallout({
  children,
  ...restProps
}) {
  return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
};

Header.Logo = ({ to, ...restProps }) => (
  <ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>
);

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
