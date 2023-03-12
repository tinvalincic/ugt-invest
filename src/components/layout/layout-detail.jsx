import Head from "next/head";
import { PageHeader } from "@/components/page-header/PageHeader";
import { classnames } from "@/lib/util";
import styles from "./LayoutDetail.module.css";

export const LayoutDetail = ({ title, pageTitle, desc, children }) => {
  return (
    <>
      <Head>
        <title>UGT Invest - {title}</title>
      </Head>
      <>
        <PageHeader title={pageTitle} desc={desc} />
        <div className={classnames("container", styles.detailsContainer)}>
          {children}
        </div>
      </>
    </>
  );
};
