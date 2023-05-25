import React from 'react'
import './Body.css'
import Header from '../Header/Header'
import { useStateValue } from '../Others/Datalayer';

const Body = ({spotify}) => {
  const [{ discover_weekly }] = useStateValue();
  return (
    <div className='body'>
       <Header spotify={spotify} />
       <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
        <div className='body_songs'>
           <div className='body_icons'>
            
           </div>
        </div>
      </div>
  )
}

export default Body