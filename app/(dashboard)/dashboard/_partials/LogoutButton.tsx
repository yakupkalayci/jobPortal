import { useFormStatus } from "react-dom";
import ServerButton from "@/app/_components/button/ServerButton";
import { MdLogout } from "react-icons/md";

function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <ServerButton
      type="submit"
      title="Çıkış Yap"
      icon={<MdLogout size={17} />}
      bgColor="primary"
      pending={pending}
    />
  );
}

export default LogoutButton;
