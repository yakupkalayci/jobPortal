import AuthForm from "../ui/login/auth-form/AuthForm";
import styles from '@/app/ui/login/login.module.css';

export type loginTypes = 'isveren' | 'isarayan' | 'default'; 

interface LoginProps {
  params: {},
  searchParams: {
    type: loginTypes;
  }
}


function Login(props:LoginProps) {
  // destruct props
  const {searchParams} = props;
  const type = searchParams?.type || 'default';

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AuthForm type={type}/>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <h1 className={styles.rightHeading}>{type} girişi</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos totam laboriosam officiis, impedit voluptate eius! Obcaecati dicta earum soluta tempore totam, dignissimos, autem libero omnis nostrum nulla quod eius.</p>
          <button className={styles.btn}>{type === 'default' || type === 'isveren' ? 'İş Arayan Olarak Giriş Yap' : 'İşveren Olarak Giriş Yap'}</button>
        </div>
      </div>
    </div>
  )
}

export default Login;