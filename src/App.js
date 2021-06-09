import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CrescendoEatsApi from './api/api';
import Routes from './routes/Routes';
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import SpecialsContext from './context/SpecialsContext';
import { useEffect, useState } from 'react';

function App() {
  const [specials, setSpecials] = useState();
  const [ingredientIds, setIngredientIds] = useState();

  const [ingredients, setIngredients] = useState(); 

  useEffect(() => {
    async function getSpecialIds() {
      const res = await CrescendoEatsApi.getAllSpecials();
      setSpecials(res);
      setIngredientIds(res.map(x => x.ingredientId));
      const iRes = await CrescendoEatsApi.getAllIngredients();
      setIngredients(iRes);
    };
    getSpecialIds();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <SpecialsContext.Provider
        value={{specials, setSpecials, ingredientIds, setIngredientIds, ingredients, setIngredients}}>
          <NavBar/>
          <Routes/>
          <Footer/>
        </SpecialsContext.Provider>
      </BrowserRouter>
    </div>
    );
}

export default App;
