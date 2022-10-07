import React, { FC, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Link from 'next/link';
import Hamburger from "../../assets/hamburger.svg";

const containerStyles =
  "fixed flex flex-row top-0 w-full h-14 items-center p-4 z-10";

const logoStyles = "flex grow justify-start cursor-pointer";

const switchStyles = "flex justify-end"

export const NavBar: FC = () => {
  const ref = useRef(null);
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add("dark-1");
      } else {
        entry.target.classList.remove("dark-1");
      }
    })
    
  };

  const handleSwitchClick = () => {
    //dark and light theme logic
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const target = document.getElementById("nav");
    const observer = new IntersectionObserver(callback, options);
    if(target) {
      observer.observe(target);
    }
    
  })

  return (
    <div id="nav" className={containerStyles} ref={ref}>
      <Link href="/">
      <div className={logoStyles}>{`<W/>`} Workit</div>
      </Link>
      
      <div className={switchStyles}>
        <label className={styles.switch}>
          <input type="checkbox" onClick={handleSwitchClick} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className="ml-4 lg:show-on-mobile">
        <Hamburger />
      </div>
    </div>
  );
};
