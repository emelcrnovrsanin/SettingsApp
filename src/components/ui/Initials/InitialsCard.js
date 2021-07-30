import classes from "./InitialsCard.module.css";
import Txt from "../Txt";
import Initials from "./Initials";

function InitialsCard(props) {
  return (
    //Initals card for header, Box card or for mainContent,Circle card

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
