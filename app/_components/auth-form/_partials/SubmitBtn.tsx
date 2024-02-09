import { useFormStatus } from "react-dom";
import { formType } from "../AuthForm";
import ServerButton from "../../button/ServerButton";

interface SubmitBtnProps {
  formType: formType;
}

function SubmitBtn(props: SubmitBtnProps) {
  // destruct props
  const { formType } = props;

  // useFormStatus
  const { pending } = useFormStatus();

  return (
    <ServerButton
      pending={pending}
      title={formType === "login" ? "Giriş Yap" : "Kayıt Ol"}
      bgColor="primary"
      extraStyles={{ width: "40%" }}
    />
  );
}

export default SubmitBtn;
