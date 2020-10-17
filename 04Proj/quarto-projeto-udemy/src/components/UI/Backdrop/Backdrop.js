import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  if (props.show) {
    return <div className={classes.Backdrop} onClick={props.clicked}></div>;
  } else {
    return null;
  }
};
//props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
export default Backdrop;