import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/index.jsx'
import Home from './components/Home/index.jsx';
import Detail from './components/Detail/index.jsx'
import CreatePokemon from './components/CreatePokemon/index.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/pokemons/:id' element = {<Detail/>}/>
        <Route path = '/pokemons' element = {<CreatePokemon/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;