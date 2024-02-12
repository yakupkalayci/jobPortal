import Link from "next/link";
import ClientButton from "../_components/button/ClientButton";
import styles from "@/app/_styles/home.module.css";

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
            <ClientButton
              title="İş İlanı Ver"
              type="button"
              bgColor="primary"
              extraClassName="home-btn"
              extraStyles={{ borderRadius: "5px", width: "200px" }}
            />
          </Link>
          <Link href="/login?type=isarayan">
            <ClientButton
              title="İş Bul"
              type="button"
              bgColor="primary"
              extraClassName="home-btn"
              extraStyles={{ borderRadius: "5px", width: "200px" }}
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
