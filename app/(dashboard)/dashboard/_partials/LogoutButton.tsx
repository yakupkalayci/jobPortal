import { useFormStatus } from "react-dom";
import ServerButton from "@/app/_components/button/ServerButton";
import { MdLogout } from "react-icons/md";
import styles from "@/app/_styles/authForm.module.css";

function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    // <button type="submit" disabled={pending} className={styles.btn}>
    //   {pending ? (
    //     <i className="fa fa-circle-o-notch fa-spin fa-lg"></i>
    //   ) : (
    //     <>
    //       <MdLogout />
    //       Çıkış Yap
    //     </>
    //   )}
    // </button>
    <ServerButton
      title="Çıkış Yap"
      icon={<MdLogout />}
      bgColor="primary"
      pending={pending}
      extraStyles={{width: '100%'}}
    />
  );
}

export default LogoutButton;
