import { ReactElement, ReactNode } from "react";
import styles from "@/app/_styles/button.module.css";

interface ButtonProps {
  title: string;
  pending?: boolean;
  icon?: ReactElement | ReactNode;
  bgColor?: "primary" | "secondary" | string[];
  extraStyles?: {};
}

function ServerButton(props: ButtonProps) {
  // destruct props
  let { title, pending, icon, bgColor, extraStyles } = props;

  if (typeof bgColor === "string" && bgColor) {
    bgColor = bgColor.split("");
    bgColor.unshift("bg-");
    bgColor = bgColor.join("") as any;
  }

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${styles.btn} ${
        bgColor && typeof bgColor === "string" && styles[bgColor]
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

export default ServerButton;
