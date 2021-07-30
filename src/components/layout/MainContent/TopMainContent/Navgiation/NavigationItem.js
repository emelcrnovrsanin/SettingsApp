import { Link } from "react-router-dom";
import classes from "./NavigationItem.module.css";

function NavigationItem(props) {
  return (
    <div className={classes.navItem} key={props.id}>
      <Link to={props.link}>
        <img
          src={props.image}
          className={classes.iconNavbar}
          alt="iconNavbar"
        />
      </Link>
      <Link to={props.link}>
        <p>{props.text}</p>
      </Link>
    </div>
  );
}

export default NavigationItem;
