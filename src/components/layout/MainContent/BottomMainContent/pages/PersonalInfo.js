import classes from "./PersonalInfo.module.css";

function PersonalInfo() {
  return (
    <div className={classes.rightBottom}>
      <div className={classes.formDiv}>
        <div className={classes.nameLastEmailMobile}>
          <div className={classes.nameLast}>
            <div className={classes.titleAndInput}>
              <div className={classes.titles}>First name</div>
              <input className={classes.inputSettings} type="text" />
            </div>
            <div className={classes.titleAndInput}>
              <div className={classes.titles}>Last name</div>
              <input className={classes.inputSettings} type="text" />
            </div>
          </div>
          <div className={classes.emailMobile}>
            <div className={classes.titleAndInput}>
              <div className={classes.titles}>Email</div>
              <input className={classes.inputSettings} type="email" />
            </div>
            <div className={classes.titleAndInput}>
              <div className={classes.titles}>Mobile phone</div>
              <input className={classes.inputSettings} type="tel" />
            </div>
          </div>
        </div>
        <div className={classes.paswordAndConfir}>
          <div className={classes.titleAndInput}>
            <div className={classes.titles}>Password</div>
            <input className={classes.inputSettings} type="password" />
          </div>
          <div className={classes.titleAndInput}>
            <div className={classes.titles}> Confir password </div>
            <input className={classes.inputSettings} type="password" />
          </div>
        </div>
        <div className={classes.info}>
          At least one uppercase letter
          <br />
          At least one lowercase letter
          <br />
          At least one number
          <br />
          At least one special character (i.e. !)
          <br />
          At least eight characters long
        </div>
        <div className={classes.save}>
          <button className={classes.buttonSettings}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
