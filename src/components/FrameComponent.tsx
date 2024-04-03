import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  iconSass?: string;
  javascript?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  iconSass,
  javascript,
  propFlex,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div className={styles.skillsWrapper} style={frameDivStyle}>
      <div className={styles.skills}>
        <div className={styles.iconCollection}>
          <img
            className={styles.iconSass}
            loading="lazy"
            alt=""
            src={iconSass}
          />
        </div>
        <b className={styles.javascript}>{javascript}</b>
      </div>
    </div>
  );
};

export default FrameComponent;
