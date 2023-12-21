import { Dispatch, SetStateAction } from "react";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import styles from "./mobile-nav.module.css";

interface MobileNavProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function MobileNav(props: MobileNavProps) {
  // destruct props
  const { status, setStatus } = props;

  return (
    <div className={`${styles.container} ${status && styles.active}`}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <MdOutlineClose size={40} onClick={() => setStatus(!status)} />
        </div>
        <div className={styles.menu}>
          <ul className={styles.mobileLinksContainer}>
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
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
