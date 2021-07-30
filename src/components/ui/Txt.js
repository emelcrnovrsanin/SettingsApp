import classes from "./Txt.module.css";
function Txt(props) {
  return <div className={classes.txt}>{props.children}</div>;
}

export default Txt;
