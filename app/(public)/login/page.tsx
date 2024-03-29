import AuthForm from "@/app/_components/auth-form/AuthForm";
import LoginTypeBtn from "./_partials/LoginTypeBtn";
import styles from "@/app/_styles/login.module.css";

export type loginTypes = "isveren" | "isarayan" | "default";

interface LoginProps {
  params: {};
  searchParams: {
    type: loginTypes;
  };
}

function Login(props: LoginProps) {
  // destruct props
  const { searchParams } = props;
  const type = searchParams?.type || "default";

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AuthForm type={type} />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <h1 className={styles.rightHeading}>
            {type === "default" || type === "isarayan"
              ? "İş Arayan"
              : "İşveren"}{" "}
            girişi
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos totam
            laboriosam officiis, impedit voluptate eius! Obcaecati dicta earum
            soluta tempore totam, dignissimos, autem libero omnis nostrum nulla
            quod eius.
          </p>
          <div className={styles.loginTypeBtn}>
            <LoginTypeBtn type={type} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
