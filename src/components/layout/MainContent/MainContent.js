import classes from "./MainContent.module.css";

import LeftMainContent from "./LeftMainContent/LeftMainContent";
import RightMainContent from "./RightMainContent/RightMainContent";

function MainContent() {
  return (
    <div className={classes.containerMainContent}>
      <div className={classes.leftMainContent}>
        <LeftMainContent />
      </div>
      <div className={classes.rightMainContent}>
        <RightMainContent />
      </div>
    </div>
  );
}

export default MainContent;
