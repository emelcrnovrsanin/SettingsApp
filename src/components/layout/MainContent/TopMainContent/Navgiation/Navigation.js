import classes from "./Navigation.module.css";

import personal from "./ImagesNavigation/personal.png";
import personalBlue from "./ImagesNavigation/personalBlue.png";
import payment from "./ImagesNavigation/payment.png";
import paymentBlue from "./ImagesNavigation/paymentBlue.png";
import creditCard from "./ImagesNavigation/creditCard.png";
import creditCardBlue from "./ImagesNavigation/creditCardBlue.png";
import billing from "./ImagesNavigation/billing.png";
import billingBlue from "./ImagesNavigation/billingBlue.png";
import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";
import NavigationItem from "./NavigationItem";

const navItems = [
  {
    image: personal,
    text: "Persona info",
    id: 1,
    link: "/",
  },
  {
    image: creditCard,
    text: "Credit card details",
    id: 2,
    link: "/credit-card-details",
  },
  {
    image: payment,
    text: "Payment plan",
    id: 3,
    link: "/payment-plan",
  },
  {
    image: billing,
    text: "Billing",
    id: 4,
    link: "/billing",
  },
];

function Navigation() {
  return navItems.map((item) => (
    <NavigationItem
      key={item.id}
      link={item.link}
      image={item.image}
      text={item.text}
    ></NavigationItem>
  ));
}

export default Navigation;
