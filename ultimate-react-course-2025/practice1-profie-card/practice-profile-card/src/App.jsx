import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ];
  return (
    <>
      <body>
        <div className="card">
          <img className="avatar" src={reactLogo} />
          <Intro />
          <div className="skill-list">
            {skills.map((skill) => (
              <Label key={skill.skill} skill={skill} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
}

function Label({ skill }) {
  const icon =
    skill.level === "beginner"
      ? "👶"
      : skill.level === "intermediate"
      ? "🧑‍💻"
      : "🚀";

  return (
    <span className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill} {icon}
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
