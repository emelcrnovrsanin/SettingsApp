import classes from "./Header.module.css";

import NameHeader from "./NameHeader";
import Initials from "./Initials";
import Logo from "./Logo";


export default function Header() {
  return (
    <div className={classes.classHeader}>
      <div className={classes.leftHeader}>
        <Logo />
      </div>
      <div className={classes.centerHeader}>
        <Initials className={classes.cssLogo} />
      </div>
      <div className={classes.rightHeader}>
        <NameHeader />
      </div>
    </div>
  );
}
