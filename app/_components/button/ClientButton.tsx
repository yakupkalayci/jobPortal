"use client";
import { ButtonProps } from "./Button";
import Button from "./Button";

type ClientButtonProps = Omit<ButtonProps, "pending">;

function ClientButton(props: ClientButtonProps) {
  // destruct props
  let { title, type, onClick, icon, bgColor, extraClassName, extraStyles } = props;

  return (
    <Button
      title={title}
      type={type}
      onClick={onClick}
      icon={icon}
      bgColor={bgColor}
      extraClassName={extraClassName}
      extraStyles={extraStyles}
    />
  );
}

export default ClientButton;
