import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/home/home.js';
import About from './Components/AboutMe/About';
import Skills from './Components/skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/footer/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Login from './Components/LoginForm/login';
import Register from './Components/register/register';
import ToDoForm from './Components/ToDoForm/todoform';
import Header from './Components/header/header';
import Favourite from './Components/favourite/favourite';
import Movies from './Components/movies/movies';
import Detailes from './Components/MovieDetailes/moviedetailes';
import Search from './Components/search/searchResult';
import store from './Redux/store';
import ApiMovies from './Components/movieApi/apiMovies';
import { LangProvider } from './context/langContext';
import {useState} from 'react';

function App() {

  const [language, setLang] = useState('en');

  return(<>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Skills/> */}
    {/* <Portfolio/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <ToDoForm/> */}
        <LangProvider value={{language, setLang}}>
          <div dir={language=='en'?'ltr':'rtl'}>
    <Router>
    <Header/>
      <Switch>

        <Route path='/' exact component={Home}></Route>
        <Route path='/Login' exact component={Login}></Route>
        <Route path='/Register' exact component={Register}></Route>
        <Route path='/Movies' exact component={Movies}></Route>
        <Route path='/ApiMovies' exact component={ApiMovies}></Route>
        <Route path='/Favourite' exact component={Favourite}></Route>
        <Route path='/Movie/:id' exact component={Detailes}></Route>
        <Route path='/Search/:mName' exact component={Search}></Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
    </LangProvider>
    </>
  );
}

export default App;