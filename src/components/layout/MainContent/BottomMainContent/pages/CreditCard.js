import classes from "./CreditCard.module.css";
import TextBox from "../../../../ui/TextBox";

const description =
  "Select a valid credit card for your Balance account or add a new card by clicking add new card and filling out the required card information on the left. New card can be selected after being added on the list bellow.";

export default function CreditCard() {
  return (
    <div className={classes.bottomMainContent}>
      <div className={classes.leftBottom}>
      <TextBox heading="Your credit cards" description={description} showCreditCards="true"/>
      </div>
      <div className={classes.rightBottom}>
        <div className={classes.formContainer}>
          <div className={classes.miniForm}>
            <div className={classes.topMiniForm}>
              <div className={classes.title}> Card number </div>
              <input
                className={classes.inputSettingsCardNumber}
                inputmode="numeric"
                pattern="[0-9\s]{13,19}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </div>

            <div className={classes.bottomMiniForm}>
              <div className={classes.inputBottomLeft}>
                <div className={classes.title}>Expiration month</div>
                <select className={classes.inputSettingsCardNumber}>
                  <option selected disabled hidden></option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sept</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className={classes.inputBottomRight}>
                <div className={classes.title}>Expiration year</div>

                <select className={classes.inputSettingsCardNumber}>
                  <option selected disabled hidden></option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.save}>
          <button className={classes.buttonSettings}>Save</button>
        </div>
      </div>
    </div>
  );
}
