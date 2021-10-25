import Head from "next/head";
import SpotifyUser from "../hooks/SpotifyUser";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";



export default function Home() {
  const { username, initiateLogin } = SpotifyUser();
  const { asPath, route, push, replace } = useRouter();
  const [token, setToken] = useState();


  const getTokenFromPath = (path) =>
  queryString.parse(path.replace("/#", "")).access_token;


  useEffect(() => {
  const access_token = getTokenFromPath(asPath);
    console.log("access token:" + access_token)

    if (access_token) {
      api.setAccessToken(access_token);
      setToken(access_token);

      // Remove token from url
      replace(asPath.split("/#")[0]);
    }
  }, [asPath]);



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
