import React from "react";
import "./App.css";
import Home from "./features/Home/Home";
import Header from "./features/Header/Header";
import SubReddits from "./features/Subreddits/Subreddits";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <SubReddits />
      </aside>
    </>
  );
}

export default App;
