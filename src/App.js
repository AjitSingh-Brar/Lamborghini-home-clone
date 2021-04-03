import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectName, setName } from "./features/counter/userSlice";
import Header from "./components/Header";

import BackgroundDiv from "./components/BackgroundDiv";
import Model from "./components/Model";
import Configurator from "./components/Configurator";
import PopupInfo from "./components/PopupInfo";
import Dealer from "./components/Dealer";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <BackgroundDiv />
      <Model />
      <Configurator />
      <Dealer />
      <News />
      <Footer />
      <PopupInfo />
    </div>
  );
}

export default App;
