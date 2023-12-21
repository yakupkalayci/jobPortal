import Image from "next/image";
import Logo from "@/public/next.svg";
import Link from "next/link";
import clsx from "clsx";
import { Header } from "./ui/home/header/Header";

import styles from "@/app/ui/home/home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
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
          <Link href="/isveren-giris">
            <div className={styles.btn}>İş İlanı Ver</div>
          </Link>
          <Link href="/is-arayan-giris">
            <div className={styles.btn}>İş Bul</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
