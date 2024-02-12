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
      type="submit"
      title={formType === "login" ? "Giriş Yap" : "Kayıt Ol"}
      bgColor="primary"
    />
  );
}

export default SubmitBtn;
