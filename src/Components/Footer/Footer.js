import React,{useEffect} from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid,Slider } from '@mui/material';
import "./Footer.css"
import { useStateValue } from '../Others/Datalayer';
const Footer = ({ spotify }) => {
  const [{ token, item, playing }, dispatch] = useStateValue();

  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     console.log(r);

  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: r.is_playing,
  //     });

  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  return (
    <div className='footer'>
        <div className='footer__left'>
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
        </div>
        <div className='footer__center'>
            <ShuffleIcon className='footer__green'/>
            <SkipPreviousIcon onClick={skipNext} className='footer__icon'/>
            {playing ? (
          <PauseCircleIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
            
            <SkipNextIcon onClick={skipPrevious} className='footer__icon'/>
            <ReplayIcon className='footer__green'/>
        </div>
        <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer