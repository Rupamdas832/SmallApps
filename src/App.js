import React, { Fragment } from "react"
import './App.css';
import CashReturn from './Components/CashReturn';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LuckyBirthday from "./Components/LuckyBirthday";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={HeroSection}/>
          <Route path="/cashmanager" component={CashReturn}/>
          <Route path="/luckybirthday" component={LuckyBirthday}/>
        </Switch>
      <Footer/>
      </Router> 
  )
}

export default App;
