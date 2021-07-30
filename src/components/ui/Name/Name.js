import classes from "./Name.module.css";
import Txt from "../Txt";

function Name(props) {
  return (
    <div className={props.isBlue ? classes.nameHeader : classes.nameMain}>
      <span className={classes.inlinee}>
        <Txt>John Doe</Txt>
      </span>
    </div>
  );
}

export default Name;
