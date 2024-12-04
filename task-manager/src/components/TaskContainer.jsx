import React from 'react';
import Task from './Task';

function TaskContainer() {
  const tasks = [
    { id: 1, title: 'Tarefa 1', description: 'Terminar o relatório mensal.' },
    { id: 2, title: 'Tarefa 2', description: 'Preparar apresentação do projeto.' },
    { id: 3, title: 'Tarefa 3', description: 'Estudar para a prova final.' },
    { id: 4, title: 'Tarefa 4', description: 'Revisar código do time de devs.' },
  ];

  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
}

export default TaskContainer;
