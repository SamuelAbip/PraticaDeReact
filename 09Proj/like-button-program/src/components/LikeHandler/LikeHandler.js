import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import classes from "./LikeHandler.module.css";

function LikeHandler() {
  const [getLikeState, setLikeState] = useState({ liked: false });
  const [getLikeNumber, setLikeNumbers] = useState()

  useEffect(() => {
    firebase.database().ref("likeNumbers").once('value').then(function (snapshot) {
    var username = (snapshot.val()) || 'Anonymous';
    setLikeNumbers(username);
  })}, []);


  function onLikeHandler() {
    setLikeState({ liked: true });
    localStorage.setItem("likedState", true);
    const newNumber = getLikeNumber + 1;
    setLikeNumbers(newNumber)
  };

  function onDislikeHandler() {
    setLikeState({ liked: false });
    localStorage.setItem("likedState", false);
    const newNumber = getLikeNumber - 1;
    setLikeNumbers(newNumber)
  }

  return (
    <div>
      <button
        onClick={getLikeState.liked ? onDislikeHandler : onLikeHandler}
        className={getLikeState.liked ? classes.liked : null}>
        {getLikeNumber}{getLikeState.liked ? " - LIKED <3" : " - LIKE ME"}
      </button>
    </div>
  );
};

export default LikeHandler;