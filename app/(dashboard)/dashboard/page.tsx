import Content from "./_partials/Content";
import Menu from "./_partials/Menu";
import styles from '@/app/_styles/dashboard.module.css';

function Dashboard() {

  return (
    <div className={styles.container}>
      <Menu />
      <Content />
    </div>
  );
}

export default Dashboard;
