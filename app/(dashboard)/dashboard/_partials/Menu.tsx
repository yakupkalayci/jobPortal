import Link from "next/link";
import LogoutForm from "./LogoutForm";
import {
  MdArticle,
  MdOutlinePendingActions,
  MdOutlinePersonOutline,
} from "react-icons/md";

import styles from "@/app/_styles/dashboard.module.css";

function Menu() {
  return (
    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link href="/ilanlar">
          <MdArticle size={25} />
          Tüm İlanlar
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/basvurularim">
          <MdOutlinePendingActions size={25} />
          Başvurularım
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/profil">
          <MdOutlinePersonOutline size={25} />
          Profilim
        </Link>
      </li>
      <li className={styles.menuItem}>
        <LogoutForm />
      </li>
    </ul>
  );
}

export default Menu;
