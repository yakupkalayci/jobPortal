'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Logo from "@/public/next.svg";
import MobileNav from "../../mobile-nav/MobileNav";

import styles from "@/app/ui/home/home.module.css";


export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);                
    }

  return (
    <header className={styles.header}>
      <div>
        <Image src={Logo} width={90} height={90} alt={"jobPortal logo"} />
      </div>
      <div className={styles.mobileLinksContainer}>
        <div onClick={() => handleMobileMenu()}>
          {
            mobileMenu ? <MdOutlineClose size={40} /> : <MdMenu size={40} />
          }
        </div>
      </div>
      <ul className={styles.desktopLinksContainer}>
        <li className={styles.link}>
          <Link href="/hakkimizda">Hakkımızda</Link>
        </li>
        <li className={styles.link}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.link}>
          <Link href="/iletisim">İletişim</Link>
        </li>
      </ul>
      <MobileNav status={mobileMenu} />
    </header>
  );
};
