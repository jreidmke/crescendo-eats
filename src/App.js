import CrescendoEatsApi from './api/api';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
      async function getAllRecipes() {
          const res = await CrescendoEatsApi.getAllRecipes();
          setRecipes(res);
      };
      getAllRecipes();
  }, []);

    async function printAll() {
      try {
        let res = await CrescendoEatsApi.getAllRecipes();
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };


    async function printOne(id) {
      try {
        let res = await CrescendoEatsApi.getRecipe(id);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }

    async function getSpecials() {
      try {
        let res = await CrescendoEatsApi.getSpecials();
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <div className="App">
          <BrowserRouter>
            <ul>
              {recipes ? recipes.map(r => 
                <li><Link to={`/recipes/${r.uuid}`}>{r.title}</Link></li>
              ) : ""}
            </ul>
            <button onClick={printAll}>Print All</button>
            <button onClick={() => printOne("e80ea521-4d42-48fe-a7a6-ac8952bc0de4")}>Print One</button>
            <button onClick={getSpecials}>specials</button>
          </BrowserRouter>
      </div>
    );
}

export default App;
