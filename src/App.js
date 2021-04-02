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
// import selectName from "./features/counter/userSlice";

function App() {
  // const [input, setInput] = useState("");
  // const dispatch = useDispatch();
  // const name = useSelector(selectName);

  // const changeName = () => {
  //   dispatch(setName(input));
  // };
  return (
    <div className="App">
      {/* <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={changeName}>Update the text</button>

        <h1>{name}</h1> */}

      <Header />
      {/* <BodyImage /> */}
      <BackgroundDiv />
      <Model />
      <Configurator />
      <Dealer />
      <PopupInfo />
    </div>
  );
}

export default App;
