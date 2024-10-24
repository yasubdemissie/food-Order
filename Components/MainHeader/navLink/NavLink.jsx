"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link href={href} className={`${styles.link} ${path === href ? styles.active : ""} `}>
      {children}
    </Link>
  );
}

export default NavLink;
