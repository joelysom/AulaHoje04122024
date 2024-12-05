
# Documentação do Exercício - Estilização de um Gerenciador de Tarefas com Papel de Parede

![Configurado](print_0.png)

## Passos Seguidos

### 1. **Criação do Layout Geral**
Primeiramente, criei o layout básico da aplicação. Para isso, usei a seguinte estilização para a classe `.App`:

```css
.App {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
  background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/dark_embroidery.png');
  background-size: cover;
  color: #333;
  min-height: 100vh;
  padding: 20px;
}
```

O que fiz aqui foi definir uma imagem de fundo para o layout da aplicação. Usei o URL de uma imagem de padrão sutil e configurei o background para cobrir todo o tamanho da tela (`background-size: cover`).

### 2. **Estilização do Header**
Depois, estilizei o cabeçalho (`header`) da aplicação. A ideia foi criar um cabeçalho com fundo escuro, com o texto em branco e bordas arredondadas para um visual mais moderno.

```css
header {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  color: white;
  border-radius: 8px;
  margin-bottom: 20px;
}
```

Apliquei um fundo semitransparente (`rgba(0, 0, 0, 0.7)`) para o cabeçalho e deixei o texto branco para um bom contraste, garantindo que ele fosse legível sobre o fundo escuro.

### 3. **Estilização das Tarefas**
As tarefas no gerenciador possuem um design card, e eu apliquei uma estilização para deixá-las com bordas suaves, sombra e um efeito de hover que destaca o card quando o usuário passa o mouse sobre ele.

```css
.task-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.task {
  width: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.task:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.task h3 {
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
}

.task p {
  margin: 0;
  color: #666;
}
```

Aqui, eu usei o `flexbox` para dispor as tarefas de forma fluida, permitindo que se ajustassem conforme o tamanho da tela. O efeito de hover foi adicionado para dar um visual mais dinâmico e interessante.

### 4. **Adicionando o Papel de Parede nas Tarefas**
Um dos desafios do exercício foi adicionar uma imagem de fundo nas caixas das tarefas, criando uma sensação de "papel de parede". Para isso, usei o seguinte código CSS:

```css
.task {
  width: 300px;
  background-color: #fff;
  background-image: url('/assets/images/seu-papel-de-parede.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

Aqui estão os passos que segui para adicionar o papel de parede:
- Coloquei a imagem dentro da pasta `public/assets/images/`.
- Usei o caminho relativo a partir da pasta `public`, o que me permitiu acessar a imagem diretamente no navegador.

**Dica:** Ao usar imagens no React, sempre verifique se o caminho está correto e se o arquivo está dentro da pasta `public` para garantir que o navegador possa acessá-lo corretamente.

### 5. **Reflexão Final**
A criação de uma interface agradável e funcional é essencial para a experiência do usuário. A adição de pequenos detalhes, como um papel de parede no fundo das tarefas, pode melhorar bastante a estética da aplicação. Ao aplicar o conceito de design visual, não apenas a funcionalidade, mas também a experiência sensorial do usuário se torna mais envolvente.

### 6. **Citação de Filósofa Feminina**
Para encerrar, deixo uma citação inspiradora de uma filósofa que contribuiu imensamente para o entendimento da lógica e da ética:

> "Não existe sabedoria sem coragem." - **Simone de Beauvoir**

Essa reflexão é importante porque, ao realizar esse exercício, percebi que cada decisão que tomamos durante o design de uma aplicação é uma forma de agir com coragem. A coragem de ousar, experimentar e ir além do básico é o que leva a um resultado mais interessante e impactante. Ao criar uma interface visualmente agradável, não estamos apenas codificando, estamos também pensando na experiência humana por trás de cada interação.

### 7. **Conclusão**
Este exercício foi uma oportunidade para aplicar conceitos de estilização de CSS e design de interfaces, além de me desafiar a incluir elementos visuais que tornam a aplicação mais agradável. Através dessa experiência, aprendi a importância do design no desenvolvimento de aplicações, focando não apenas na funcionalidade, mas também na experiência visual do usuário.

---

**Dicas Finais:**
- Sempre verifiCARo caminho das imagens quando estiver trabalhando com arquivos estáticos em React.
- Não teR medo de experimentar diferentes estilos e efeitos para melhorar a interface.


---