import React, {useState} from 'react'

const Character = ({character}) => {
    const [isShown, setIsShown] = useState(false);

    const toggleDetails = () => {
        setIsShown(!isShown)
    }

  return (
    <div>
        <h2>{character.name}</h2>
        {isShown && <p>{character.details}</p>}
        <button onClick={toggleDetails}>{isShown ? "Show more" : "Show less"}</button>
    </div>
  )
}

export default Character