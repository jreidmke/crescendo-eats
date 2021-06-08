import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CrescendoEatsApi from './api/api';
import Routes from './routes/Routes';
import NavBar from "./components/NavBar";
import SpecialsContext from './context/SpecialsContext';
import { useEffect, useState } from 'react';

function App() {
  const [specials, setSpecials] = useState();
  const [ingredientIds, setIngredientIds] = useState();

  useEffect(() => {
    async function getSpecialIds() {
      const res = await CrescendoEatsApi.getSpecials();
      setSpecials(res);
      setIngredientIds(res.map(x => x.ingredientId))
    };
    getSpecialIds();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <SpecialsContext.Provider
        value={{specials, setSpecials, ingredientIds, setIngredientIds}}>
          <NavBar/>
          <Routes/>
        </SpecialsContext.Provider>
      </BrowserRouter>
    </div>
    );
}

export default App;
