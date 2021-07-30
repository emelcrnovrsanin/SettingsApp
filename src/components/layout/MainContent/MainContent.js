import classes from "./MainContent.module.css";
import BottomMainContent from "./BottomMainContent/BottomMainContent";
import Txt from "../../ui/Txt";
import Navigation from "./TopMainContent/Navgiation/Navigation";
import InitialsInfoBox from "../../ui/InitialsInfoBox";

function MainContent() {
  return (
    <div className={classes.containerMainContent}>
      <div className={classes.topMainContent}>
        <div className={classes.topMainContentTop}>
          <span className={classes.spanYourAccount}>
            <Txt>Your account </Txt>{" "}
          </span>
          <span className={classes.spanDescription}>
            <Txt>You can modify personal information here</Txt>
          </span>
        </div>
        <div className={classes.topMainContentBottom}>
          <div className={classes.cardSide}>
            <InitialsInfoBox />
          </div>
          <div className={classes.navbarSide}>
            <Navigation />
          </div>
        </div>
      </div>
      <BottomMainContent />
    </div>
  );
}

export default MainContent;
