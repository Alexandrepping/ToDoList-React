import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  async function handleAddProject() {
    const { data: project } = await api.post("/projects", {
      title,
      owner,
    });

    setProjects([...projects, project]);
    setTitle("");
    setOwner("");
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} - <b>{project.owner}</b>
          </li>
        ))}
      </ul>

      <div className="inputContainer">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projetos
      </button>

      <h1>{title}</h1>
      <h1>{owner}</h1>
    </>
  );
}

export default App;
