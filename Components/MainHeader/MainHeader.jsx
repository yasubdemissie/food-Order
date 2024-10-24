import Link from "next/link"
import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";

function MainHeader() {


    return (
        <header className={styles.header}>
            <Link className={styles.logo} href={'/'}>
                <Image src={LogoImg} alt="A food on a plate" priority />
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={'/meals'}>Meals</Link>
                    </li>
                    <li>
                        <Link href={'/community'}>Meals Community</Link>
                    </li>
                    <li>
                        <Link href={'/meals/share'}>Meals Share</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
