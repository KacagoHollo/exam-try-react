import React, { useEffect, useState } from "react"
import http from 'axios'

import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

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
    }, 3 * 1000);
  }, []);

  return (
    <div className="head">
      <h1>Series Api</h1>
      <div className="main">
        {characters ?
        characters.map((character, i) => (
          <Character character={character} key={i}/>
          )) 
        : <LoadingMask/>}
      </div>
      {isShown && <Subscription setIsShown={setIsShown}/>}
    </div>
  )
}

export default App
