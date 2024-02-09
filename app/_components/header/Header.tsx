"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Logo from "@/public/next.svg";
import MobileNav from "../mobile-nav/MobileNav";
import Avatar from "../profile/Avatar";
import styles from "@/app/_styles/home.module.css";

export const Header = () => {
  // states
  const [mobileMenu, setMobileMenu] = useState(false);

  // variables
  const pathName = usePathname();

  // methods
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <Image src={Logo} width={90} height={90} alt={"jobPortal logo"} />
        </Link>
      </div>
      {pathName !== '/dashboard' && (
        <div className={styles.mobileLinksContainer}>
          <div onClick={() => handleMobileMenu()}>
            {mobileMenu ? <MdOutlineClose size={40} /> : <MdMenu size={40} />}
          </div>
        </div>
      )}
      <ul className={styles.desktopLinksContainer}>
        {pathName === '/dashboard' ? (
          <Link href="/profil">
            <Avatar />
          </Link>
        ) : (
          <>
            <li className={styles.link}>
              <Link href="/about">Hakkımızda</Link>
            </li>
            <li className={styles.link}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.link}>
              <Link href="/contact">İletişim</Link>
            </li>
          </>
        )}
      </ul>
      {pathName !== '/dashboard' && <MobileNav status={mobileMenu} />}
    </header>
  );
};
