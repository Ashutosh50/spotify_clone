import React from 'react'
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
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <h1>album</h1>
        </div>
        <div className='footer__center'>
            <ShuffleIcon className='footer__green'/>
            <SkipPreviousIcon className='footer__icon'/>
            <PlayCircleIcon fontSize='large' className=''/>
            <SkipNextIcon className='footer__icon'/>
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