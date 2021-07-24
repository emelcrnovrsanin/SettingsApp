import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.classFooter}>
      <span className={classes.leftSpan}>Terms&Conditions | Privacy Policy</span>
      <span className={classes.rightSpan}>Version 1.0.2</span>
    </div>
  );
}

export default Footer;
