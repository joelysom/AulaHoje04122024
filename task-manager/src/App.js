import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="icon-container">
          <img src="./icone.png" alt="icon" className="icon" />
        </div>
        <h1>PROTEC</h1>
        <p>
          A Protec oferece soluções em tecnologia, programação, manutenção e redes, garantindo
          inovação e suporte técnico eficiente para seus clientes.
        </p>
        <p className="join-us">Ainda não faz parte? <a href="#">Junte-se a nós!</a></p>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <img src="./rectangle.png" alt="User Background" className="user-bg" />
          <img src="./user.png" alt="User Icon" className="user-icon" />
          <h2>bem vindo(a)</h2>
          <form>
            <div className="input-field">
              <img src="./vector_user.png" alt="User Icon" className="input-icon" />
              <input type="text" placeholder="Usuário" />
            </div>
            <div className="input-field">
              <img src="./vector_lock.png" alt="Lock Icon" className="input-icon" />
              <input type="password" placeholder="Senha" />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" />
                Lembrar senha
              </label>
              <a href="#">esqueceu a senha?</a>
            </div>
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>
        <img src="./vector_assistent.png" alt="Assistant Icon" className="assistant-icon" />
      </div>
    </div>
  );
}

export default App;
