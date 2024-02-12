import { ButtonProps } from "./Button";
import Button from "./Button";

type ServerButtonProps = Omit<ButtonProps, "onClick">;

function ServerButton(props: ServerButtonProps) {
  // destruct props
  let { title, type, pending, icon, bgColor, extraStyles } = props;

  return (
    <Button
      title={title}
      type={type}
      pending={pending}
      icon={icon}
      bgColor={bgColor}
      extraStyles={extraStyles}
    />
  );
}

export default ServerButton;
