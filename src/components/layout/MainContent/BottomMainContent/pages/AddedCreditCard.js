import classes from "./AddedCreditCard.module.css";
import creditCardBlue from "../../TopMainContent/Navgiation/ImagesNavigation/creditCardBlue.png";
const creditCards = [
  "1234 5678 9101 1213",
  "1234 5678 9101 1213",
  "1234 5678 9101 1213",
];
function AddedCreditCard() {
  return (
    <div className={classes.container}>
      <div className={classes.newCard}>
        <text className={classes.textClass}>+ Add new card</text>
      </div>
      {creditCards.map((creditCard) => (
        <div className={classes.creditCardContainer}>
          <div className={classes.imageContainer}>
            <img src={creditCardBlue} alt="creditCardIcon"></img>
          </div>
          <div className={classes.creditCardNumber}>{creditCard}</div>
          <div className={classes.checkBoxContainer}>
            <input className={classes.checkClass} type="checkbox"></input>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AddedCreditCard;
