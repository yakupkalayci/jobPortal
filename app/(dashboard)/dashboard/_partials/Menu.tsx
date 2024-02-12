import Link from "next/link";
import LogoutForm from "./LogoutForm";
import {
  MdArticle,
  MdOutlinePendingActions,
  MdOutlinePersonOutline,
  MdAddCircle,
} from "react-icons/md";

import styles from "@/app/_styles/dashboard.module.css";

interface MenuProps {
  userType: "employer" | "employee";
}

function Menu(props: MenuProps) {
  // destruct props
  const { userType } = props;

  // variables
  const menu = [
    {
      key: 0,
      label: "Tüm İlanlar",
      href: "/ilanlar",
      icon: <MdArticle size={25} />,
      type: "employee",
    },
    {
      key: 1,
      label: "Başvurularım",
      href: "/basvurularim",
      icon: <MdOutlinePendingActions size={25} />,
      type: "employee",
    },
    {
      key: 2,
      label: "Tüm İlanlarım",
      href: "/tum-ilanlarim",
      icon: <MdArticle size={25} />,
      type: "employer",
    },
    {
      key: 3,
      label: "İlan Ver",
      href: "/ilan-ver",
      icon: <MdAddCircle size={25} />,
      type: "employer",
    },
    {
      key: 4,
      label: "Profilim",
      href: "/profil",
      icon: <MdOutlinePersonOutline size={25} />,
      type: "both",
    },
  ];

  return (
    <ul className={styles.menuContainer}>
      {menu.map(
        (item) =>
          (item.type === "both" || item.type === userType) && (
            <li key={item.key} className={styles.menuItem}>
              <Link href={item.href}>
                {item.icon}
                {item.label}
              </Link>
            </li>
          )
      )}
      <li className={styles.menuItem}>
        <LogoutForm />
      </li>
    </ul>
  );
}

export default Menu;
