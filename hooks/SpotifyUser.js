import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import SpotifyAPI from "spotify-web-api-js";

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";


const getTokenFromPath = (path) =>
  queryString.parse(path.replace("/#", "")).access_token;

const SpotifyUser = () => {
  const { asPath, route, push, replace } = useRouter();
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [api] = useState(new SpotifyAPI());

  useEffect(() => {
    if (!token && route !== "/login" && !getTokenFromPath(asPath)) {
      console.log(route);
      push("/login");
    }
  }, [token]);

 

  useEffect(() => {
    const access_token = getTokenFromPath(asPath);
    console.log("access token:" + access_token)

    if (access_token) {
      api.setAccessToken(access_token);
      setToken(access_token);

      // Remove token from url
      // replace(asPath.split("/#")[0]);
    }
  }, [asPath]);


  const initiateLogin = () =>
    push({
      pathname: SPOTIFY_AUTH_ENDPOINT,
      query: {
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        response_type: "token",
        redirect_uri: "http://localhost:3000/",
        scope: "user-read-recently-played, user-read-playback-state",
      },
    });

  const fetchAccountInfo = async () => {
    const { display_name, email } = await api.getMe();
    setUsername(display_name || email);
  };

  useEffect(() => {
    if (token && !username) {
      fetchAccountInfo();
    }
  }, [token, username]);

  return { username, initiateLogin, api };
};

export default SpotifyUser;
