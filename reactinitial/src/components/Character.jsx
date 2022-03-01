import React, {useState} from 'react'
import Button from '@mui/material/Button';

const Character = ({character}) => {
    const [isShown, setIsShown] = useState(false);

    const toggleDetails = () => {
        setIsShown(!isShown)
    }

  return (
    <div>
        <h2>{character.name}</h2>
        {isShown && <p>{character.details}</p>}
        <Button variant="contained" onClick={toggleDetails}>{isShown ? "Show more" : "Show less"}</Button>
    </div>
  )
}

export default Character