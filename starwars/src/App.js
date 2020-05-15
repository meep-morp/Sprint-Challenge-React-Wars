import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Character from "./components/characters";
import Search from "./components/SearchBar";
import Pages from "./components/Pages";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)
      .then(resolve => {
        console.log("For the empire!");
        setCharData(resolve.data.results);
      })
      .catch(error => {
        console.log("I have a bad feeling about this... \n" + error);
      })
  }, [page]);

const onClickNext = event => {
  if (page === 9) {
    setPage(1);
  } else {
    setPage(page + 1);
  }
}

const onClickPrev = event => {
  if (page === 1) {
    setPage(9);
  } else {
    setPage(page - 1);
  }
}

console.log(charData);
  
  return (
    <div className="App">
      <h1 className="Header" 
      style={{color: '#e0c742', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', fontSize: '3rem'}}>CHARACTERS</h1>
      <Search term={term} setTerm={setTerm} charData={charData} setCharData={setCharData} />
      <Pages pageNumber={page} onClickNext={onClickNext} onClickPrev={onClickPrev}  />
      <Character data={charData}/>
    </div>
  );
}

export default App;
