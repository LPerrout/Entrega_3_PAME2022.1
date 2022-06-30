import React from 'react'
import './Style.css';

function Footer(){ return(
    <div className="footer">
        <div className="center2">
          <div className="infosad">
            <h4>História</h4>
            <p>BigMark é uma startup fundada por Luciano no final de 2021 focada em expandir o seu
pequeno negócio em São Pedro da Serra, que consiste em um mercadinho da região.
Assim, Luciano projetou a BigMark como um sistema de gerenciamento e pedidos dos mais
diversos tipos, todos relacionados a itens que diversos mercados podem oferecer
normalmente, de um modo similar à plataforma do Ifood, um aplicativo bastante famoso no
mercado tecnológico.
</p>
          </div>
          <div className="infosad">
            <h4>Informação 2</h4>
            <p> Espaço reservado para mais informações adicionais.</p>
          </div>
        </div>
        <div className="center2">
          <div className="infosad">
            <h4>Contato</h4>
            <p>Espaço reservado para contato, como por exemplo: <br/><br/>Telefone: +55 (xx)xxxxx-xxxx.<br/>Email: xxxxx@xxxx.com</p>
          </div>
          <div className="infosad">
            <h4>Informação 4</h4>
            <p>espaço reservado para informações adicionais da empresa como certificações.</p>
          </div>
        </div>
      </div>
      )
}
export default Footer
