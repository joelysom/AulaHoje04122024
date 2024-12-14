
---

## **Documentação do Projeto: Introdução aos Hooks e useState**

### **O que eu fiz z**
Eu criei um projeto React para explorar o hook `useState` através de três exercícios práticos: um contador, um botão alternador de estado, e uma lista de tarefas. Durante o desenvolvimento, organizei o código em componentes para facilitar a manutenção e o reuso.

---

### **1. Configurando o Projeto**
Primeiro, eu criei a estrutura do projeto React utilizando o comando:

```bash
npx create-react-app meu-projeto
cd meu-projeto
```

Depois, entrei no diretório e configurei os componentes na pasta `src/components`.

---

### **2. Componente: Contador**
No componente `Contador`, eu usei o `useState` para controlar o valor do contador, permitindo incrementá-lo ou decrementá-lo com botões. Também adicionei uma validação para evitar números negativos.

#### **Código do Contador**
```javascript
import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Contador;
```

Eu testei o comportamento do contador clicando nos botões e confirmei que ele não permite valores negativos.

---

### **3. Componente: Botão Alternador**
Neste componente, implementei um botão que alterna entre "Ligado" e "Desligado". Usei o `useState` para controlar o estado do botão e configurei o fundo da página para mudar dinamicamente conforme o estado.

#### **Código do Botão Alternador**
```javascript
import React, { useState } from "react";
import "../App.css";

function BotaoAlternador() {
  const [estado, setEstado] = useState(false);

  const alterarFundo = () => {
    setEstado(!estado);
    document.body.style.backgroundColor = !estado ? "black" : "white";
  };

  return (
    <div>
      <button
        className={estado ? "desligado" : "ligado"}
        onClick={alterarFundo}
      >
        {estado ? "desligado" : "ligado"}
      </button>
    </div>
  );
}

export default BotaoAlternador;
```

Adicionei estilos no CSS para diferenciar visualmente o estado do botão e implementei uma transição suave para a troca de fundo.

---

### **4. Componente: Lista de Tarefas**
Eu criei um componente que permite adicionar e remover tarefas de uma lista. O `useState` gerencia o valor do campo de texto e os itens da lista.

#### **Código da Lista de Tarefas**
```javascript
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
```

Eu testei adicionando e removendo tarefas e confirmei que tudo funciona corretamente.

---

### **5. Tutorial do Botão Alternador (Ligar/Desligar)**

**Como eu fiz o botão alternador:**

1. Eu comecei criando um estado chamado `estado` com o hook `useState`:
   ```javascript
   const [estado, setEstado] = useState(false);
   ```

2. Depois, criei a função `alterarFundo` para alternar o estado e alterar a cor de fundo da página:
   ```javascript
   const alterarFundo = () => {
     setEstado(!estado);
     document.body.style.backgroundColor = !estado ? "black" : "white";
   };
   ```

3. No botão, usei a função `alterarFundo` no evento `onClick`:
   ```javascript
   <button
     className={estado ? "ligado" : "desligado"}
     onClick={alterarFundo}
   >
     {estado ? "Ligado" : "Desligado"}
   </button>
   ```

4. Adicionei classes CSS para os estados:
   ```css
   button.ligado {
     background-color: green;
     color: white;
   }

   button.desligado {
     background-color: red;
     color: white;
   }

   body {
     transition: background-color 0.3s ease;
   }
   ```

**Testando o botão:**
- Quando clico no botão "Desligado", o fundo fica preto e o texto muda para "Ligado".
- Quando clico novamente, o fundo volta a ficar branco e o texto muda para "Desligado".

---

**Frase Filosófica da Bruxa Má do Oeste (Elphaba):**
"Ninguém nasce realmente mau, apenas as escolhas e circunstâncias moldam o que nos tornamos."

**Reflexão sobre o Exercício:**
- Assim como Elphaba enfrenta escolhas que moldam sua     jornada, no desenvolvimento de um projeto, somos confrontados por decisões que definem nosso **código e lógica**. Usar o **useState**, por exemplo, é como tomar o controle do destino do estado de um componente, escolhendo como ele evolui. Assim como ela, que luta contra as expectativas e adversidades, nós, como desenvolvedores, ajustamos e refinamos cada linha para alcançar um resultado que transcenda as limitações iniciais. O exercício me mostrou que cada detalhe **até mesmo um botão** carrega o poder de transformar a experiência toda.