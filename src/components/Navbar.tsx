"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles["navbar--scrolled"] : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`${styles.navbar__container}`}>
        <a href="/" className={`${styles.navbar__logo}`}>
          <Image
            src="/img/logo.jpg"
            alt="Logo"
            width={65}
            height={65}
            className={styles.navbar__logoImage}
          />
        </a>
        <ul className={`${styles.navbar__menu}`}>
          <li>
            <a href="/" className={styles.navbar__link}>
              Accueil
            </a>
          </li>
          <li>
            <a href="/services" className={styles.navbar__link}>
              Services
            </a>
          </li>
          <li>
            <a href="/blog" className={styles.navbar__link}>
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.navbar__link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

