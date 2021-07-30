import classes from "./Billing.module.css";
import TextBox from "../../../../ui/TextBox";

const billingInformatons = [
  {
    subscriptionPlan: "Starter",
    amount: "3964 USD",
    paidAt: "01/21/2021 14:52:32",
  },
  {
    subscriptionPlan: "Business",
    amount: "2554 USD",
    paidAt: "01/24/2021 14:52:32",
  },
  {
    subscriptionPlan: "Enterprise",
    amount: "3547 USD",
    paidAt: "01/27/2021 14:52:32",
  },
];

const description =
  "This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button";

function Billing() {
  return (
    <div className={classes.bottomMainContent}>
      <div className={classes.leftBottom}>
        <TextBox heading="Billing info" description={description} />
      </div>
      <div className={classes.billingContainer}>
        <div className={classes.tableHeading}>
          <div className={classes.heading}>Billing information</div>
          <div className={classes.subHeading}>
            Overview of your credit card transaction
          </div>
        </div>
        <div className={classes.tableContainer}>
          <table className={classes.table}>
            <tr>
              <th>Subscription plan</th>
              <th>Amount paid</th>
              <th>Paid at</th>
            </tr>
            {billingInformatons.map((billingInformation) => (
              <tr>
                <td>{billingInformation.subscriptionPlan}</td>
                <td>{billingInformation.amount}</td>
                <td>{billingInformation.paidAt}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Billing;
