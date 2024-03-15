import React, { useState } from 'react'; 

function Player({ name, symbol ,isActive}) { 
  const [playerName, setPlayerName] = useState(name); 
  const [isEditing, setIsEditing] = useState(false); 
  
  const handleEditClick = () => {
    setIsEditing(!isEditing); 
  };

  let editablePlayerName = playerName; 
  let buttonCaption = "Edit"; 

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        required
      />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive?'active':undefined}>
      <span className="players">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}

export default Player;
