import classes from "./Header.module.css";
import InitialsCard from "../../ui/Initials/InitialsCard";
import Name from "../../ui/Name/Name";
import logoImage from "./ImageHeader/logoImage.png";

export default function Header() {
  return (
    <div className={classes.containerHeader}>
      <div className={classes.header}>
        <div className={classes.leftHeader}>
          <section>
            <img src={logoImage} alt="menu" />
          </section>
        </div>
        <div className={classes.rightHeader}>
          <InitialsCard isBox={true} />
          <Name isBlue={true} />
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
}
