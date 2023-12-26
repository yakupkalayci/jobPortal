import Link from "next/link";
import { Header } from "./ui/header/Header";

import styles from "@/app/ui/home/home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>
            100'den Fazla <span className={styles.category}>Kategoride</span> İş
            İlanı Burada
          </span>
          <span>
            Lokasyona göre filtreleme özelliği ile konumunuza en yakın iş
            ilanları inceleyin veya iş ilanı yayınlayın
          </span>
        </div>
        <div className={styles.btnContainer}>
          <Link href="/login?type=isveren">
            <div className={styles.btn}>İş İlanı Ver</div>
          </Link>
          <Link href="/login?type=isarayan">
            <div className={styles.btn}>İş Bul</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
