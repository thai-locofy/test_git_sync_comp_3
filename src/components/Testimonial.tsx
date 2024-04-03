import { FunctionComponent } from "react";
import Testimonial1 from "./Testimonial1";
import styles from "./Testimonial.module.css";

const Testimonial: FunctionComponent = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialInner}>
        <div className={styles.myParent}>
          <h1 className={styles.my}>My</h1>
          <h1 className={styles.testimonial1}>Testimonial</h1>
        </div>
      </div>
      <div className={styles.row}>
        <Testimonial1
          circles="/circles@2x.png"
          vector="/vector.svg"
          evrenShah="Evren Shah"
        />
        <Testimonial1
          circles="/ellipse-2664-1@2x.png"
          vector="/vector-1.svg"
          evrenShah="Flora sheen"
          propBackgroundColor="#000"
          propBackgroundColor1="#fff"
          propColor="#fff"
          propBackgroundColor2="#fff"
          propColor1="#fff"
          propColor2="#fff"
        />
        <Testimonial1
          circles="/circles@2x.png"
          vector="/vector.svg"
          evrenShah="Evren Shah"
          propBackgroundColor="#fff"
          propBackgroundColor1="#000"
          propColor="#404040"
          propBackgroundColor2="#000"
          propColor1="#404040"
          propColor2="#71717a"
        />
      </div>
    </section>
  );
};

export default Testimonial;
