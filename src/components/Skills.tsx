import { FunctionComponent } from "react";
import Skills1 from "./Skills1";
import FrameComponent from "./FrameComponent";
import styles from "./Skills.module.css";

const Skills: FunctionComponent = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsInner}>
        <div className={styles.skillsParent}>
          <div className={styles.skills1}>
            <div className={styles.frameParent}>
              <div className={styles.iconGitWrapper}>
                <img
                  className={styles.iconGit}
                  loading="lazy"
                  alt=""
                  src="/icongit.svg"
                />
              </div>
              <b className={styles.javascript}>Git</b>
            </div>
            <div className={styles.absBadge} />
          </div>
          <div className={styles.skills2}>
            <div className={styles.iconNest}>
              <img
                className={styles.iconNest1}
                loading="lazy"
                alt=""
                src="/iconnest.svg"
              />
            </div>
            <div className={styles.nestjsParent}>
              <b className={styles.nestjs}>Nest.Js</b>
              <b className={styles.nestjs1}>Nest.Js</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillsChild}>
        <div className={styles.skillsGroup}>
          <Skills1
            iconJavscript="/iconjavscript.svg"
            javascript="javascript"
            propColorRenamed="white"
            showJavascript
          />
          <Skills1
            iconJavscript="/icongit.svg"
            javascript="Git"
            propBackgroundColor="#fff"
            propOverflow="hidden"
            propColorRenamed="#000"
            showJavascript
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.myParent}>
          <h1 className={styles.my}>My</h1>
          <h1 className={styles.skills3}>Skills</h1>
        </div>
        <FrameComponent iconSass="/iconsass.svg" javascript="Sass/scss" />
        <FrameComponent
          iconSass="/iconstorybook.svg"
          javascript="Storybook"
          propFlex="unset"
          propHeight="186px"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.skillsContainer}>
          <Skills1
            iconJavscript="/iconnest.svg"
            javascript="Nest.Js"
            propBackgroundColor="#fff"
            propOverflow="hidden"
            propColorRenamed="#000"
            showJavascript
          />
          <Skills1
            iconJavscript="/iconsocket.svg"
            javascript="Socket.io"
            propBackgroundColor="#fff"
            propOverflow="hidden"
            propColorRenamed="#000"
            showJavascript
          />
        </div>
      </div>
      <div className={styles.skillsInner1}>
        <div className={styles.skillsParent1}>
          <Skills1
            iconJavscript="/iconstorybook.svg"
            javascript="Storybook"
            propBackgroundColor="#fff"
            propOverflow="hidden"
            propColorRenamed="#000"
            showJavascript
          />
          <Skills1
            iconJavscript="/iconsass.svg"
            javascript="Sass/scss"
            propBackgroundColor="#fff"
            propOverflow="hidden"
            propColorRenamed="#000"
            showJavascript
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
