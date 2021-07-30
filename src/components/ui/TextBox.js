import AddedCreditCard from "../layout/MainContent/BottomMainContent/pages/AddedCreditCard";
import classes from "./TextBox.module.css";
import Txt from "./Txt";

function TextBox(props) {
  return (
    <div className={classes.container}>
      <div className={classes.titleAndBox}>
        <Txt>
          <span className={classes.title}>{props.heading}</span>
        </Txt>
        <div className={classes.textBox}>
          <div className={classes.innerTextBox}>
            <p className={classes.textt}>{props.description}</p>
          </div>
        </div>
      </div>
      {props.showCreditCards && (
        <div className={classes.creditCardsInfo}>
          <AddedCreditCard />
        </div>
      )}
    </div>
  );
}
export default TextBox;
