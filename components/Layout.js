
import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"



const Layout = ({ children }) => {

    return (
        <div className={style.main}>
            <div className={style.glass}>
                <div className={style.dashboard}>
                        <Link href="/">
                            <div className={style.link}>home</div>
                         </Link>
                         <Link href="/recent">
                            <div className={style.link}>recent</div>
                         </Link>
                         <Link href="/about">
                            <div className={style.link}>playlists</div>
                         </Link>
                         <Link href="/skills">
                            <div className={style.link}>new artists</div>
                         </Link>
                </div>
                <div className={style.app}>
                { children }
                </div>
            </div>
        </div>
    )
}

export default Layout;