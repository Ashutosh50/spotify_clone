import React,{useEffect} from 'react';
import Login from './Components/Login/Login';
import { getTokenFromResponse } from './Components/Others/Spotify';
import Player from './Components/Player/Player'
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./Components/Others/Datalayer";
  
const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist().then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);
  return (
    <div className="App">
      {
        token ? (
          <Player/>
        ):
        (<Login/>)
      }
    </div>
  );
}

export default App;
