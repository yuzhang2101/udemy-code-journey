import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <>
      <body>
        <div className="card">
          <img className="avatar" src={reactLogo} />
          <Intro />
          <div className="skill-list">
            <Label content="React" color="#61dafb" icon="⚛️" />
            <Label content="Vite" color="#646cff" icon="⚡️" />
            <Label content="CSS" color="#f06529" icon="🎨" />
            <Label content="CSS" color="#f06529" icon="🎨" />
            <Label content="CSS" color="#f06529" icon="🎨" />
            <Label content="CSS" color="#f06529" icon="🎨" />
            <Label content="CSS" color="#f06529" icon="🎨" />
          </div>
        </div>
      </body>
    </>
  );
}

function Label({ content, color, icon }) {
  return (
    <span className="skill" style={{ backgroundColor: color }}>
      {content} {icon}
    </span>
  );
}

function Intro() {
  return (
    <div>
      <h1>Yu Zhang</h1>
      <p>full-stack developer and consultant</p>
    </div>
  );
}

export default App;
