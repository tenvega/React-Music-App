import React from 'react';

const PlayListItem = (props) => {

  const song = props.song;

  return (
    <ul className="card-block list-group col-lg-6 col-md-6">
       <li className="list-group-item borderless">
          <div>
            <span>User:</span>
            {song.userName}</div>
        </li>
        <li className="list-group-item borderless">
          <div>
            <span>Artist/Band:</span>
            {song.songArtist}</div>
        </li>
        <li className="list-group-item borderless">
          <div>
            <span>Title:</span>
            {song.songTitle}</div>
        </li>
        <li className="list-group-item borderless">
          <div>
            <span>Notes:</span>
            {song.songNotes}</div>
        </li>

    </ul>
  )
}

export default PlayListItem;
