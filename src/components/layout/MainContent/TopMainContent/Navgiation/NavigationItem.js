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
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <text className={classes.textNavbar}>{props.text}</text>
      </Link>
    </div>
  );
}

export default NavigationItem;
