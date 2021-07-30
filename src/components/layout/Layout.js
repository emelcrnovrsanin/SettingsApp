import classes from "./Layout.module.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer.js";
import MainContent from "./MainContent/MainContent";




function Layout() {
   return (
    <div className={classes.display}>
      <div className={classes.window}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
