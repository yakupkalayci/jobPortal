import Link from "next/link";
import ClientButton from "@/app/_components/button/ClientButton";
import { loginTypes } from "../page";

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
      <ClientButton
        title={
          type === "default" || type === "isarayan"
            ? "İşveren Olarak Giriş Yap"
            : "İş Arayan Olarak Giriş Yap"
        }
        type="button"
        bgColor="secondary"
      />
    </Link>
  );
}

export default LoginTypeBtn;
