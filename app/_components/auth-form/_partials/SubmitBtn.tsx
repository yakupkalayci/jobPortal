import { useFormStatus } from "react-dom";
import { formType } from "../AuthForm";
import styles from "@/app/_styles/authForm.module.css";

interface SubmitBtnProps {
  formType: formType;
}

function SubmitBtn(props: SubmitBtnProps) {
  // destruct props
  const { formType } = props;

  // useFormStatus
  const { pending } = useFormStatus();

  return (
    <>
      <button type="submit" className={styles.btn}>
        {pending ? (
          <i className="fa fa-circle-o-notch fa-spin fa-lg"></i>
        ) : formType === "login" ? (
          "Giriş Yap"
        ) : (
          "Kayıt Ol"
        )}
      </button>
    </>
  );
}

export default SubmitBtn;
