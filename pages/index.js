import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import SpotifyUser from '../hooks/SpotifyUser'
import TrackPreview from '../components/TrackPreview'
const Spotify = require('spotify-web-api-js')



export default function Home() {
  const { username, api } = SpotifyUser();
  const [isLoading, setIsLoading] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState();


  useEffect(() => {
      if(username){
        setIsLoading(true)
        api.getMyRecentlyPlayedTracks( {limit: 50} ).then((res) => {
          console.log(res.items)
          setRecentlyPlayed(res.items)
        })
        api.getMyCurrentPlaybackState().then((res) => {
            // console.log(res);
            setCurrentlyPlaying(res.item.name)
            setIsLoading(false)
      });
    }
  }, [username])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

  <h1 className={styles.title}>Hey, {username}!</h1>
  <h2 style={{ marginTop: 42 }}>You're currently playing track is: {currentlyPlaying}</h2>
  <h2 style={{ marginTop: 42 }}>Here's your recently played tracks</h2>

      {isLoading && <p>Loading...</p>}
      <div style={{ marginTop: 72 }}>
          {recentlyPlayed.map(({ track }) => (
                <TrackPreview key={`${track.id}`} track={track} />
              ))}
      </div>
    </main>
  </div>
  )
}

