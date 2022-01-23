
import './App.css';
import Navbar from './component/navbar/navbar'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Form from './component/Form/Form'
import Movies from './component/Movie/Movie'
import LoginForm from './component/LoginForm/LoginForm'
import MovieDetails from './component/Movie/MovieDetails'
import Favorites from './component/Favorites/Favorites'
import {LanguageProvider}from './Context/LanguageContext'
import {useState} from 'react'

function App() {

  const [lang,setLang]=useState("en")
  let [login, setLogin] = useState(false);
  return(
    <>
    <Router>
      <LanguageProvider value={{lang,setLang}}>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Movies}/>
    <Route path="/Form" exact component={Form}/>
    <Route path="/LoginForm" exact component={LoginForm}/>
    <Route path="/MovieDetails/:id" exact component={MovieDetails}/>
    {/* <Route path='/Favorites'>
          {login ? <Favorites/> : <Redirect to='/LoginForm'/>}
        </Route>  */}
    <Route path="/Favorites" exact component={Favorites}/>
    </Switch>
    </LanguageProvider>
    </Router>
    </>
  );
}

export default App;
