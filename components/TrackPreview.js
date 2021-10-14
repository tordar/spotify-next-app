import { useState } from "react";
import style from '../styles/TrackPreview.module.css'

const TrackPreview = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(track.preview_url));
  audio.onpause = () => setIsPlaying(false);

  const handlePlayToggle = () => {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={style.trackPreview}
      style={{ background: isPlaying && "#aeffd0" }}
      onClick={handlePlayToggle}
    >
      <div>
        <h3>{track.name}</h3>
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
      <div className={style.playableAlbumCover}>
        <img
          src={
            isPlaying
              ? "https://img.icons8.com/ios-glyphs/344/circled-pause.png"
              : "https://img.icons8.com/ios-glyphs/344/circled-play.png"
          }
          height="80px"
          className={style.playToggle}
          style={{ opacity: isPlaying && 1 }}
        />
        <img src={track.album?.images[0]?.url || ""} height="80px" />
      </div>
    </div>
  );
};

export default TrackPreview;
