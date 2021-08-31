import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshots) => {
        const allContent = snapshots.docs.map((snapshot) => ({
          ...snapshot.data(),
          docId: snapshot.id,
        }));

        setContent(allContent);
      })
      .catch((error) => console.log(error.message));
  }, [target]);

  return { [target]: content };
}
