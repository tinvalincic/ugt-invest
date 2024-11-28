import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import { classnames } from "@/lib/util";
import { useEffect, useRef, useState } from "react";

function createNavItem(name, href) {
  return {
    name,
    href,
  };
}

const navItems = [
  createNavItem("O nama", "gradnja-stanova-bjelovar"),
  createNavItem("Projekt Frankopanska 2", "prodaja-stanova-bjelovar"),
  createNavItem("Reference", "novogradnja-bjelovar"),
  createNavItem("Kontakt", "kupnja-stana-bjelovar"),
];

const ContentTop = ({ clickHandler }) => (
  <div className={classnames(styles.contentTop, styles.containerFlex)}>
    <div className={styles.topLogo}>
      <Image src="/logo.png?v=1" alt="UGT Invest logo" width={110} height={43} />
    </div>
    <button className={styles.closeButton} onClick={clickHandler}>
      <Image src="/close.png" alt="Close" width={20} height={20} />
    </button>
  </div>
);

export const Navigation = () => {
  const [headerClasses, setHeaderClasses] = useState([styles.header]);
  const [mobileNavClasses, setMobileNavClasses] = useState([styles.mobileNav]);
  const header = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const { offsetHeight: height } = header.current;
      if (window.scrollY > height && !headerClasses.includes(styles.sticky)) {
        setHeaderClasses([...headerClasses, styles.sticky]);
        return;
      }
      if (window.scrollY <= height && headerClasses.includes(styles.sticky)) {
        setHeaderClasses([styles.header]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerClasses]);

  const toggleMobileNav = () => {
    if (mobileNavClasses.includes(styles.active)) {
      setMobileNavClasses([styles.mobileNav]);
      return;
    }
    setMobileNavClasses([...mobileNavClasses, styles.active]);
  };

  return (
    <header className={classnames(...headerClasses)} ref={header}>
      <div className={styles.navTop}>
        <div
          className={classnames(
            "container",
            "container-wide",
            styles.navTopContainer
          )}
        >
          <Link href="/prodaja-stanova-bjelovar" className={styles.topItem}>
            prodaja@ugt-invest.hr
          </Link>
          <span className={styles.topItem}>+385 99 2543 204</span>
        </div>
      </div>
      <nav className={styles.navigation}>
        <div
          className={classnames(
            "container",
            "container-wide",
            styles.containerFlex
          )}
        >
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo.png?v=1"
                alt="UGT Invest logo"
                width={110}
                height={43}
                priority
              />
            </Link>
          </div>
          <NavItems />
          <div className={styles.hamburgerContainer}>
            <div className={styles.hamburger} onClick={toggleMobileNav}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <div className={classnames(...mobileNavClasses)}>
        <div className={styles.shadow}></div>
        <NavItems
          className={styles.mobileNavItems}
          TopContent={() => <ContentTop clickHandler={toggleMobileNav} />}
        />
      </div>
    </header>
  );
};

const NavItems = ({ className = "", TopContent, BottomContent }) => (
  <ul className={classnames(styles.navItems, className)}>
    {!!TopContent && (
      <li>
        <TopContent />
      </li>
    )}
    {navItems.map((item) => (
      <li className={styles.navItem} key={item.href}>
        <Link href={`/${item.href}`}>{item.name}</Link>
      </li>
    ))}
    {!!BottomContent && <li>{<BottomContent />}</li>}
  </ul>
);
