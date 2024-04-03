import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Skills1.module.css";

export type Skills1Type = {
  iconJavscript?: string;
  javascript?: string;
  showJavascript?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propColorRenamed?: CSSProperties["color"];
};

const Skills1: FunctionComponent<Skills1Type> = ({
  iconJavscript,
  javascript,
  propBackgroundColor,
  propOverflow,
  propColorRenamed,
  showJavascript = true,
}) => {
  const skillsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconJavscriptStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const javascriptStyle: CSSProperties = useMemo(() => {
    return {
      color: propColorRenamed,
    };
  }, [propColorRenamed]);

  return (
    <div className={styles.skills} style={skillsStyle}>
      <div className={styles.iconJavscriptWrapper}>
        <img
          className={styles.iconJavscript}
          loading="lazy"
          alt=""
          src={iconJavscript}
          style={iconJavscriptStyle}
        />
      </div>
      {showJavascript && (
        <b className={styles.javascript} style={javascriptStyle}>
          {javascript}
        </b>
      )}
    </div>
  );
};

export default Skills1;
