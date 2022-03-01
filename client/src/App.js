import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/index.jsx'
import Home from './components/Home/index.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
        <Route path = '/home' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;