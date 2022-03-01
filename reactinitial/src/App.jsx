import React, { useEffect, useState } from "react"
import http from 'axios'

import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";

const App = () => {

  const [characters, setCharacters] = useState(null);
  const [isShown, setIsShown] = useState(false)

  const loadFunc = async() => {
    const response = await http.get("https://seriescharacters.com/api/howimetyourmother");

    setCharacters(response.data)
    // setCharacters(response.data);
    // console.log(characters)
  }

  useEffect(() => {
    loadFunc();
    setTimeout(() => {
      setIsShown(true)
    }, 5 * 1000);
  }, []);

  return (
    <div>
      <h1>Series Api</h1>
      {characters ?
      characters.map((character, i) => (
        <Character character={character} key={i}/>
        )) 
      : <LoadingMask/>}
    </div>
  )
}

export default App
