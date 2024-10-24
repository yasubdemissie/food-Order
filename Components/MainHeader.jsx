import Link from "next/link"
import LogoImg from "@/assets/logo.png";

function MainHeader() {
    return (
        <header>
            <Link href={'/'}>
                <img src={LogoImg.src} alt="A food on a plate" />
            </Link>
            <nav>
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
