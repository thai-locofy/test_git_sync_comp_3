import { FunctionComponent } from "react";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.skillsParent}>
      <Skills />
      <Testimonial />
    </div>
  );
};

export default Frame;
