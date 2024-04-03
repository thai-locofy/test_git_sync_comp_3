import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Testimonial1.module.css";

export type Testimonial1Type = {
  circles?: string;
  vector?: string;
  evrenShah?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
};

const Testimonial1: FunctionComponent<Testimonial1Type> = ({
  circles,
  vector,
  evrenShah,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propBackgroundColor2,
  propColor1,
  propColor2,
}) => {
  const testimonialStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const iRecentlyHadStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const designerNameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const evrenShahStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const designerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.testimonial} style={testimonialStyle}>
      <div className={styles.evrenShahDesigner}>
        <div className={styles.circlesParent}>
          <img className={styles.circlesIcon} alt="" src={circles} />
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} style={ellipseDivStyle} />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src={vector}
            />
          </div>
        </div>
      </div>
      <div className={styles.iRecentlyHad} style={iRecentlyHadStyle}>
        I recently had to jump on 10+ different calls across eight different
        countries to find the right owner.
      </div>
      <div className={styles.designerNameWrapper}>
        <div className={styles.designerName} style={designerNameStyle} />
      </div>
      <div className={styles.evrenShah} style={evrenShahStyle}>
        {evrenShah}
      </div>
      <div className={styles.designer} style={designerStyle}>
        Designer
      </div>
    </div>
  );
};

export default Testimonial1;
