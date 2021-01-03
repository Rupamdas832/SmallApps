import React from "react"
import './App.css';
import CashReturn from './Components/CashReturn';

import Header from "./Components/Header";
import LuckyBirthday from "./Components/LuckyBirthday";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeroSection from "./Components/HeroSection";
import ProfitLoss from "./Components/ProfitLoss";
import GroceryList from "./Components/GroceryList";

const App = () => {
  return (
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={HeroSection}/>
          <Route path="/cashmanager" component={CashReturn}/>
          <Route path="/luckybirthday" component={LuckyBirthday}/>
          <Route path="/profitloss" component={ProfitLoss}/>
          <Route path="/grocerylist" component={GroceryList}/>
        </Switch>
        
      </Router> 
  )
}

export default App;
