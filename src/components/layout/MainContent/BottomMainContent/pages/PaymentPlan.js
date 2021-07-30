import classes from "./PaymentPlan.module.css";
import TextBox from "../../../../ui/TextBox";
import { useState } from "react";
import first from "./ImagesPaymentPlan/first.png";
import second from "./ImagesPaymentPlan/second.png";
import third from "./ImagesPaymentPlan/third.png";
import fourth from "./ImagesPaymentPlan/fourth.png";

const paymenetPlans = [
  {
    name: "Starter",
    image: fourth,
    price: "5$",
    included: [
      "Up to 5 gateways",
      "Basic support",
      "Monthly updates",
      "First month free",
      "Cancel anytime",
    ],
  },
  {
    name: "Business",
    image: second,
    price: "10$",
    included: [
      "Up to 10 gateways",
      "Basic support",
      "Monthly updates",
      "First month free",
      "Cancel anytime",
    ],
  },
  {
    name: "Enterprise",
    image: third,
    price: "15$",
    included: [
      "Up to 15 gateways",
      "24/7 support",
      "Monthly updates",
      "First month free",
      "Cancel anytime",
    ],
  },
];
const description =
  "This is the personal info section of your account. Here you can easily change your basic info. After you finish updating this section please click the save changes button";

function PaymentPlan() {
  const [selectedPlan, setSelectedPlan] = useState("Starter");

  function onSelectPlanClick(clickedPlan) {
    setSelectedPlan(clickedPlan);
  }

  const [showPlans, setShowPlans] = useState(true);

  function onSetShowPlans(value) {
    setShowPlans(value);
  }

  return (
    <div className={classes.bottomMainContent}>
      <div className={classes.leftBottom}>
        <TextBox heading="Payment plan" description={description} />
      </div>
      <div className={classes.container}>
        {showPlans &&
          paymenetPlans.map((paymentPlan) => (
            <div className={classes.paymentPlan}>
              <div className={classes.imageContainer}>
                <img
                  src={paymentPlan.image}
                  className={classes.image}
                  alt="starterPaymentPlan"
                />
              </div>

              <div className={classes.heading}>{paymentPlan.name}</div>

              <div className={classes.priceBox}>
                <div className={classes.price}>{paymentPlan.price}</div>
                <div className={classes.priceDesc}>/per month</div>
              </div>

              <div className={classes.includedInPlan}>
                {paymentPlan.included.map((paymentPlanIncluded) => (
                  <div className={classes.included}>{paymentPlanIncluded}</div>
                ))}
              </div>

              <div className={classes.buttonContainer}>
                <button
                  className={classes.button}
                  onClick={() => onSelectPlanClick(paymentPlan.name)}
                >
                  Select plan
                </button>
                {paymentPlan.name == selectedPlan && (
                  <button
                    className={classes.buttonCancel}
                    onClick={() => onSetShowPlans(false)}
                  >
                    Cancel subscription
                  </button>
                )}
              </div>
            </div>
          ))}
        {!showPlans && (
          <div>
            Test
            <button>Confirm</button>
            <button onClick={() => onSetShowPlans(true)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentPlan;
