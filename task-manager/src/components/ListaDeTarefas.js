import React, { useState } from "react";

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setLista([...lista, tarefa]);
      setTarefa("");
    }
  };

  const removerTarefa = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index} onClick={() => removerTarefa(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
