//Tools
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import CrescendoEatsApi from './api/api';
import Routes from './routes/Routes';
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import SpecialsContext from './context/SpecialsContext';

//Css
import './App.css';

function App() {
  const [specials, setSpecials] = useState();
  const [ingredients, setIngredients] = useState(); 

  useEffect(() => {
    async function getSpecialIds() {
      const res = await CrescendoEatsApi.getAllSpecials();
      setSpecials(res);
      const iRes = await CrescendoEatsApi.getAllIngredients();
      setIngredients(iRes);
    };
    getSpecialIds();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <SpecialsContext.Provider
        value={{specials, setSpecials, ingredients, setIngredients}}>
          <NavBar/>
          <Routes/>
          <Footer/>
        </SpecialsContext.Provider>
      </BrowserRouter>
    </div>
    );
}

export default App;
