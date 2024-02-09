import Link from "next/link";
import { loginTypes } from "../page";
import styles from "@/app/_styles/login.module.css";

interface LoginTypeBtnProps {
  type: loginTypes;
}

function LoginTypeBtn(props: LoginTypeBtnProps) {
  // destruct props
  const { type } = props;

  return (
    <Link
      href={`/login?type=${
        type === "default" || type === "isarayan" ? "isveren" : "isarayan"
      }`}
    >
      <button className={`${styles.btn} ${styles.btnRight}`}>
        {type === "default" || type === "isarayan"
          ? "İşveren Olarak Giriş Yap"
          : "İş Arayan Olarak Giriş Yap"}
      </button>
    </Link>
  );
}

export default LoginTypeBtn;
