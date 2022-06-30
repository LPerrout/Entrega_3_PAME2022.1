import React from 'react'
import './Style.css';

function Header() {
  return (
    <header className="App-header">
        <div className="center">
          <div className="menu">
            <div className="Logo">
              <h3>LOGO MARCA</h3>
            </div>
            <div className="form">
            <form>
              <h2>LOGIN</h2>
              <div className="itens-formulario">
                <input placeholder= "ID"type="text"/>
                <input placeholder= "Senha"type="text"/>
                <button className="login">Entrar</button>
                <button className="login">Cadastre-se</button>
              </div>
            </form>
          </div>
            <div className = "item-menu">
              <a href="#">ENTREGA</a>
              <a href="#">SUPORTE</a>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header