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
          <div className={styles.skills3}>
            <div className={styles.iconJavscriptWrapper}>
              <img
                className={styles.iconJavscript}
                loading="lazy"
                alt=""
                src="/iconjavscript.svg"
              />
            </div>
            <b className={styles.javascript1}>javascript</b>
          </div>
          <Skills1
            showJavascript
            iconJavscript="/icongit.svg"
            javascript="Git"
            nestJsColor="#ff0000"
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.myParent}>
          <h1 className={styles.my}>My</h1>
          <h1 className={styles.skills4}>Skills</h1>
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
            showJavascript
            iconJavscript="/iconnest.svg"
            javascript="Nest.Js"
          />
          <Skills1
            showJavascript
            iconJavscript="/iconsocket.svg"
            javascript="Socket.io"
            nestJsColor="#000"
          />
        </div>
      </div>
      <div className={styles.skillsInner1}>
        <div className={styles.skillsParent1}>
          <div className={styles.skills5}>
            <div className={styles.iconStorybookWrapper}>
              <img
                className={styles.iconStorybook}
                alt=""
                src="/iconstorybook.svg"
              />
            </div>
            <div className={styles.javascriptParent}>
              <b className={styles.javascript2}>Storybook</b>
              <div className={styles.nestjsWrapper}>
                <b className={styles.nestjs2}>Nest.Js</b>
              </div>
            </div>
          </div>
          <div className={styles.skills6}>
            <div className={styles.iconSassWrapper}>
              <img className={styles.iconSass} alt="" src="/iconsass.svg" />
            </div>
            <b className={styles.javascript3}>Sass/scss</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
