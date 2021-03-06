import classes from "./Navigation.module.css";
import personal from "./ImagesNavigation/personal.png";
import payment from "./ImagesNavigation/payment.png";
import creditCard from "./ImagesNavigation/creditCard.png";
import billing from "./ImagesNavigation/billing.png";

import NavigationItem from "./NavigationItem";

const navItems = [
  {
    image: personal,
    text: "Personal info",
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
