
import Link from "next/dist/client/link";
import style from "../styles/Layout.module.css"



const Layout = ({ children }) => {

    return (
        <div className={style.main}>
            <div className={style.glass}>
                <div className={style.dashboard}>
                    <div className={style.info}>
                    
                    
                    </div>
                    <nav>
                        <Link href="/">
                            <div className={style.link}>HOME</div>
                         </Link>
                         <Link href="/recent">
                            <div className={style.link}>RECENT</div>
                         </Link>
                         <Link href="/about">
                            <div className={style.link}>ABOUT</div>
                         </Link>
                         <Link href="/skills">
                            <div className={style.link}>SKILLS</div>
                         </Link>
                    </nav>
                </div>
                <div className={style.app}>
                { children }
                </div>
            </div>
        </div>
    )
}

export default Layout;