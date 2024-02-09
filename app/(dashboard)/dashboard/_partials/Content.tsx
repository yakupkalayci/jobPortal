import styles from '@/app/_styles/dashboard.module.css';

function Content() {
  return (
    <div className={styles.contentContainer}>
      <h4>Aktif İlanlar</h4>
      <div className={styles.ads}>İlanlar</div>
    </div>
  )
}

export default Content;