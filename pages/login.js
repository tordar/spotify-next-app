import Head from "next/head";
import SpotifyUser from "../hooks/SpotifyUser";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { username, initiateLogin } = SpotifyUser();
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={styles.container}>
        <button className={styles.loginBtn} onClick={initiateLogin}>Login</button>
     </div>

    </div>
  );
}
