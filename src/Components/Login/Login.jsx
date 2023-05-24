import React from 'react'
import './Login.css'
import {accessUrl} from "../Others/Spotify.js"

const Login = () => {
  return (
    <div className='login'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='Spotify-logo'/>

        <a href={accessUrl}>log in</a>
    </div>
  )
}

export default Login