import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Fr from './components/Fr';
import RecipeList from './components/RecipeList';
import CreateRecipe from './components/CreateRecipe';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Signup />} path="/login" />
        <Route element={<Login />} path="/log" />
        <Route element={<Fr />} path="/fried" />
          <Route path="/recipes" exact component={RecipeList} />
            <Route path="/recipes/new" component={CreateRecipe} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
