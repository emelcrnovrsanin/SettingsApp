import classes from "./Logo.module.css";
import logoImage from "./ImageHeader/logoImage.png";
function Logo() {
  return (
    <section>
      <img className={classes.logo} src={logoImage} />
    </section>
  );
}

export default Logo;
