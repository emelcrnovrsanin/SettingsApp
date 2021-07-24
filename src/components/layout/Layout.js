import classes from "./Layout.module.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer.js";
import MainContent from "./MainContent/MainContent";

function Layout() {
    return (
  <div className={classes.window}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Header />
    <MainContent />
    <Footer />
  </div>
  );
}

export default Layout;
