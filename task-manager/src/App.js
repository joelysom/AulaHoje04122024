import React from "react";
import "./App.css";
import Contador from "./components/Contador";
import BotaoAlternador from "./components/BotaoAlternador";
import ListaDeTarefas from "./components/ListaDeTarefas";

function App() {
  return (
    <div className="App">
      <h1>Exercícios de React com useState - Aluno: Joelysom</h1>
      <section>
        <h2>Exercício 1: Contador</h2>
        <Contador />
      </section>
      <section>
        <h2>Exercício 2: Botão Alternador</h2>
        <BotaoAlternador />
      </section>
      <section>
        <h2>Exercício 3: Lista de Tarefas</h2>
        <ListaDeTarefas />
      </section>
    </div>
  );
}

export default App;
