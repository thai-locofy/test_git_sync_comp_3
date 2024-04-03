import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Skills1.module.css";

export type Skills1Type = {
  iconJavscript?: string;
  javascript?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propColor?: CSSProperties["color"];
};

const Skills1: FunctionComponent<Skills1Type> = ({
  iconJavscript,
  javascript,
  propBackgroundColor,
  propOverflow,
  propColor,
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
      color: propColor,
    };
  }, [propColor]);

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
      <b className={styles.javascript} style={javascriptStyle}>
        {javascript}
      </b>
    </div>
  );
};

export default Skills1;
