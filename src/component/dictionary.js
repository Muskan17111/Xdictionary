import React, { useState } from 'react';

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const searchResult = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (searchResult) {
      setResult(searchResult.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Definition:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default XDictionary;

