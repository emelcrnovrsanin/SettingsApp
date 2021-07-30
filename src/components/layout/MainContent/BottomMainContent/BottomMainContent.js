import { Switch, Route } from "react-router";
import PersonalInfo from "./pages/PersonalInfo";
import CreditCard from "./pages/CreditCard";
import PaymentPlan from "./pages/PaymentPlan";
import Billing from "./pages/Billing";
function BottomtMainContent() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <PersonalInfo />
      </Route>
      <Route path="/credit-card-details">
        <CreditCard />
      </Route>
      <Route path="/payment-plan">
        <PaymentPlan />
      </Route>
      <Route path="/billing">
        <Billing />
      </Route>
    </Switch>
  );
}

export default BottomtMainContent;
