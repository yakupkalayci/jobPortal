import { redirect } from "next/navigation";
import { getUser } from "@/app/_lib/actions/user";
import Content from "./_partials/Content";
import Menu from "./_partials/Menu";
import styles from "@/app/_styles/dashboard.module.css";

async function Dashboard() {
  const response = await getUser();
  let userType;
  if(response) {
    ({ userType } = response);
  } else {
    redirect('/');
  }  

  return (
    <div className={styles.container}>
      <Menu userType={userType} />
      <Content />
    </div>
  );
}

export default Dashboard;
