import React, { useState, useContext, useEffect } from "react";
import ProfileContainer from "./profile";
import { FirebaseContext } from "../context/firebase";
import { Loading, Header, Card, Player } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers/footer";
import Fuse from "fuse.js";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  const user = firebase.auth().currentUser || {};
  console.log(user);
  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={user.photoURL} />
      ) : (
        <>
          <Loading.ReleaseBody />
          <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="logo" />
                <Header.TextLink
                  active={category === "series" ? true : false}
                  onClick={() => setCategory("series")}
                >
                  Series
                </Header.TextLink>
                <Header.TextLink
                  active={category === "films" ? true : false}
                  onClick={() => setCategory("films")}
                >
                  Films
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <Header.Profile>
                  <Header.Picture src={user.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink
                        onClick={() => firebase.auth().signOut()}
                      >
                        Sign out
                      </Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>
            <Header.Feature>
              <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
              <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header>

          <Card.Group>
            {slideRows.map((item) => (
              <Card key={`${category}-${item.title.toLowerCase()}`}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Entities>
                  {item.data.map((slide) => (
                    <Card.Item key={slide.docId} item={slide}>
                      <Card.Image
                        src={`/images/${category}/${slide.genre}/${slide.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{slide.title}</Card.SubTitle>
                        <Card.Text>{slide.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Card.Feature>
              </Card>
            ))}
          </Card.Group>
          <FooterContainer />
        </>
      )}
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
