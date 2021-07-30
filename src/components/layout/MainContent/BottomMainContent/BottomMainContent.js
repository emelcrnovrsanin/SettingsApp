import { Switch, Route } from "react-router";
import PersonalInfo from "./pages/PersonalInfo";
import CreditCard from "./pages/CreditCard";
import PaymentPlan from "./pages/PaymentPlan";
import Billing from "./pages/Billing";
import TextBox from "../../../ui/TextBox";
import classes from "./BottomMainContent.module.css";


const description =
  "This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button";
  
const descriptionCreditCard = "Select a valid credit card for your Balance account or add a new card by clicking add new card and filling out the required card information on the left. New card can be selected after being added on the list bellow."

function BottomtMainContent() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <div className={classes.bottomMainContent}>
          <div className={classes.leftBottom}>
            <TextBox heading="Personal info" description={description} />
          </div>
          <div className={classes.rightBottom}>
          <PersonalInfo />
          </div>
        </div>
      </Route>
      <Route path="/credit-card-details">
      <div className={classes.bottomMainContent}>
          <div className={classes.leftBottom}>
          <TextBox heading="Your credit cards" description={descriptionCreditCard} showCreditCards="true"/>
          </div>
          <div className={classes.rightBottom}>
          <CreditCard />
          </div>
        </div>
      </Route>
      <Route path="/payment-plan">
      <div className={classes.bottomMainContent}>
          <div className={classes.leftBottom}>
          <TextBox heading="Payment plan" description={description} />
          </div>
          <div className={classes.rightBottom}>
          <PaymentPlan />
          </div>
        </div>
      </Route>
      <Route path="/billing">
      <div className={classes.bottomMainContent}>
          <div className={classes.leftBottom}>
          <TextBox heading="Billing info" description={description} />
          </div>
          <div className={classes.rightBottom}>
          <Billing />
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default BottomtMainContent;
