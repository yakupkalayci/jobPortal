import { ReactElement, ReactNode } from "react";
import styles from "@/app/_styles/button.module.css";

export interface ButtonProps {
  title: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  pending?: boolean;
  icon?: ReactElement | ReactNode;
  bgColor?: "primary" | "secondary";
  extraClassName?: string;
  extraStyles?: {};
}

function Button(props: ButtonProps) {
  // destruct props
  let {
    title,
    type,
    onClick,
    pending,
    icon,
    bgColor,
    extraClassName,
    extraStyles,
  } = props;

  if (bgColor) {
    let newBgColor = bgColor.split("");
    newBgColor.unshift("bg-");
    bgColor = newBgColor.join("") as any;
  }
  return (
    <button
      type={type}
      disabled={pending}
      onClick={() => onClick?.()}
      className={`${styles.btn} ${bgColor && styles[bgColor]} ${
        extraClassName && styles[extraClassName]
      }`}
      style={extraStyles}
    >
      {pending ? (
        <i className="fa fa-circle-o-notch fa-spin fa-lg"></i>
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </button>
  );
}

export default Button;
