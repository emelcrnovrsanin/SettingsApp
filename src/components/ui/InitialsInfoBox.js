import classes from "./InitialsInfoBox.module.css";
import Txt from "./Txt";
import InitialsCard from "./Initials/InitialsCard";
import Name from "./Name/Name";
function InitialsInfoBox() {
  return (
    <div className={classes.dim}>
      <div className={classes.leftDiv}>
        <InitialsCard isBox={false} />
      </div>

      <div className={classes.rightDiv}>
        <div className={classes.nameDiv}>
          <Txt>
            <span>
              <Name isBlue={false} />
            </span>
          </Txt>
        </div>
        <div className={classes.infoDiv}>
          <Txt>
            <span className={classes.addresNumber}>
              <addres>john.doe@email.com</addres>
              <br></br>
              <number>387 61 123 456</number>
            </span>
          </Txt>
        </div>
      </div>
    </div>
  );
}

export default InitialsInfoBox;
