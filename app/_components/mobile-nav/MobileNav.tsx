import Link from "next/link";
import styles from '@/app/_styles/mobile-nav.module.css';

interface MobileNavProps {
  status: boolean;
}

function MobileNav(props: MobileNavProps) {
  // destruct props
  const { status } = props;

  return (
    <div className={`${styles.container} ${status && styles.active}`}>
      <div className={styles.innerContainer}>
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
  );
}

export default MobileNav;
