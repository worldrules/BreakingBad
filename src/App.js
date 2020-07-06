import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {
  const [items, setItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItens = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
      setItens(result.data);
      setIsLoading(false);
    };

    fetchItens();
  }, []);

  return (
    <div className="Container">
      <Header></Header>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
};

export default App;
