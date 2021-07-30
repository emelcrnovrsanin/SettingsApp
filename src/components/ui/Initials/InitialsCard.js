import classes from "./InitialsCard.module.css";
import Initials from "./Initials";

function InitialsCard(props) {
  return (
    <div className={props.isBox ? classes.cardBox : classes.cardCircle}>
      <div
        className={props.isBox ? classes.classSpanBox : classes.classSpanCircle}
      >
        <Initials />
      </div>
    </div>
  );
}

export default InitialsCard;
