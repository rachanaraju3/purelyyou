import style from './navbar.module.css'
import Link from 'next/link'

export default function Navbar(){
    return (
        <header className={style.navbar}>
            <h1>PurelyYou</h1>
            <nav>
                <ul className={style.navList}>
                    <li className={style.navLinks}><Link href="/homepage">Home</Link></li>
                    <li className={style.navLinks}><Link href="/quiz">Take our Quiz</Link></li>
                </ul>
            </nav>
        </header>
    )
}