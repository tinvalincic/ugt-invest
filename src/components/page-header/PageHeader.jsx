import { classnames } from "@/lib/util";
import styles from "./PageHeader.module.css";

export const PageHeader = ({ title, desc }) => (
  <div className={classnames(styles.pageHeader)}>
    <div className={styles.shadow}></div>
    <div className={classnames("container", styles.container)}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  </div>
);
