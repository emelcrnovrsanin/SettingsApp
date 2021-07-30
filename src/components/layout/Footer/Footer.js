import classes from "./Footer.module.css";
import Txt from "../../ui/Txt";

function Footer() {
  return (
    <div className={classes.classFooter}>
      <span className={classes.leftSpan}>
        <Txt>Terms&Conditions | Privacy Policy</Txt>
      </span>
      <span className={classes.rightSpan}>
        <Txt>Version 1.0.2</Txt>
      </span>
    </div>
  );
}

export default Footer;
