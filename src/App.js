import React from "react"
import './App.css';
import CashReturn from './Components/CashReturn';

import Header from "./Components/Header";
import LuckyBirthday from "./Components/LuckyBirthday";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeroSection from "./Components/HeroSection";
import ProfitLoss from "./Components/ProfitLoss";
import GroceryList from "./Components/GroceryList";
import { Provider } from "react-redux";
import Store from "../src/Redux/Store"

const App = () => {
  return (
      <Router>
      <Provider store={Store}>
        <Header/>
        <Switch>
            <Route exact path="/" component={HeroSection}/>
            <Route path="/cashmanager" component={CashReturn}/>
            <Route path="/luckybirthday" component={LuckyBirthday}/>
            <Route path="/profitloss" component={ProfitLoss}/>
            <Route path="/grocerylist" component={GroceryList}/>
        </Switch>
      </Provider> 
      </Router> 
  )
}

export default App;
