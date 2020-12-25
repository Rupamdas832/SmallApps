import React, { Fragment } from "react"
import './App.css';
import CashReturn from './Components/CashReturn';
import Footer from "./Components/Footer";
import Header from "./Components/Header";


const App = () => {
  return (
      <div className="appContainer">
        <Header/>
        <CashReturn/>
        <Footer/>
      </div>
  )
}

export default App;
