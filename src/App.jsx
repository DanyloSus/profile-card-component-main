import React from "react";
import Header from "./Elements/Header";
import Section from "./Elements/Section";

function App() {
  return (
    <>
      <img src="./bg-pattern-top.svg" alt="bg pattern top" className="img lt" />
      <main>
        <Header />
        <Section />
      </main>
      <img
        src="./bg-pattern-bottom.svg"
        alt="bg pattern bottom"
        className="img rt"
      />
    </>
  );
}

export default App;
