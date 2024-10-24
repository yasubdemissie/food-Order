
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./navLink/NavLink";

function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image src={LogoImg} alt="A food on a plate" priority />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
