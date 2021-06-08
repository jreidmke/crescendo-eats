import CrescendoEatsApi from './api/api';
import './App.css';

function App() {

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
      <button onClick={printAll}>Print All</button>
      <button onClick={() => printOne("e80ea521-4d42-48fe-a7a6-ac8952bc0de4")}>Print One</button>
      <button onClick={getSpecials}>specials</button>
    </div>
  );
}

export default App;
