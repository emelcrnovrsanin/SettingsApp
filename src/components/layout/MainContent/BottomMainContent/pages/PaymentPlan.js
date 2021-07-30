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

const textCancel =
  "Before you unsubscribe consider changing the payment plan. If you are uncertain which plan best suites your business do not hesitate to contact our support and we will do our best to assist you in choosing the right plan for you. ";
const textCancelTwo =
  "If you cancel your subscription you won’t be able to use any of the platform features and your payments will be discontinued. ";
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
    <div className={classes.container}>
    <div className={classes.paymentPlansContainer}>
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
            <div className={classes.containerCancel}>
              <div className={classes.firstColumnCancel}>
                <text className={classes.cancelTitle}>
                  We are sorry to see you go
                </text>
                <br />
                <text className={classes.textCancelSet}> {textCancel}</text>
              </div>
              <div className={classes.secondColumnCancel}>
                <text className={classes.titleCancel}>OUR JOURNEY SO FAR</text>
                <div className={classes.threeCards}>
                  <div className={classes.cancelCard}>
                    <span className={classes.numberClass}>4</span>
                    <span className={classes.spanCard}>PROJECTS</span>
                  </div>
                  <div className={classes.cancelCard}>
                    <span className={classes.numberClass}>3</span>
                    <span className={classes.spanCard}>GETEWAYSS</span>
                  </div>
                  <div className={classes.cancelCard}>
                    <span className={classes.numberClass}>$14K</span>
                    <span className={classes.spanCard}>PAYMENTS</span>
                  </div>
                </div>
              </div>
              <div className={classes.thirdColumnCancel}>
                <span className={classes.cancelTitle}>
                  Are you sure you want to unsubscribe?
                </span>
                <text className={classes.textCancelSet}>{textCancelTwo}</text>
              </div>
              <div className={classes.fourthColumnCancel}>
                <button className={classes.buttonCacleConfirm}>Confirm</button>
                <button
                  className={classes.buttonCacleConfirm}
                  onClick={() => onSetShowPlans(true)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={classes.save}>
        <button className={classes.buttonSettings}>Save</button>
      </div>
    </div>
  );
}

export default PaymentPlan;
