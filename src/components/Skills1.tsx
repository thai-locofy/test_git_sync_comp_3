import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Skills1.module.css";

export type Skills1Type = {
  showJavascript?: boolean;
  iconJavscript?: string;
  javascript?: string;

  /** Style props */
  nestJsColor?: CSSProperties["color"];
};

const Skills1: FunctionComponent<Skills1Type> = ({
  showJavascript = true,
  iconJavscript,
  javascript,
  nestJsColor,
}) => {
  const nestJsStyle: CSSProperties = useMemo(() => {
    return {
      color: nestJsColor,
    };
  }, [nestJsColor]);

  return (
    <div className={styles.skills}>
      <div className={styles.iconNestWrapper}>
        <img className={styles.iconNest} alt="" src={iconJavscript} />
      </div>
      <div className={styles.javascriptParent}>
        {showJavascript && <b className={styles.javascript}>{javascript}</b>}
        <b className={styles.nestjs} style={nestJsStyle}>
          Nest.Js
        </b>
      </div>
    </div>
  );
};

export default Skills1;
