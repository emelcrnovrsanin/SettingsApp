import classes from "./MainContent.module.css";
import BottomMainContent from "./BottomMainContent/BottomMainContent";
import Txt from "../../ui/Txt";
import Navigation from "./TopMainContent/Navgiation/Navigation";
import InitialsInfoBox from "../../ui/InitialsInfoBox";
import { useLayoutEffect, useState } from "react";

function MainContent() {
  const [screenSize, setScreenSize] = useState(1024);

  useLayoutEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setScreenSize(window.innerWidth)
      );
  }, []);
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
        <div
          className={
            screenSize > 800
              ? classes.topMainContentBottom
              : classes.topMainContentBottom2
          }
        >
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
