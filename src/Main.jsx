import React from 'react'
import './Style.css';

function Main() {
  return (<div className="main">
    <div>
        <div className= 'pesquisa'>
            <h3>Pesquisar item:</h3>
            <input type="text" placeholder= "Item Desejado" className = 'barrapesquisa'/>
            <button className="pesquisar">Pesquisar</button>
        </div>
        <div className="linha1">
            <div className = "center3">  
                    <div className = "produto">
                        <div className="fotoproduto">FOTO</div>
                        <h2 className = "Preco">XX,XX R$</h2>
                        <p className = "informaprod">infos: informações do produto fornecido</p>
                        <div>
                            <button className="botoesdecompra">Comprar</button>
                            <button className="botoesdecompra">Detalhes</button>
                        </div>
                    </div>
                    <div className = "produto">
                        <div className="fotoproduto">FOTO</div>
                        <h2 className = "Preco">XX,XX R$</h2>
                        <p className = "informaprod">infos: informações do produto fornecido</p>
                        <div>
                            <button className="botoesdecompra">Comprar</button>
                            <button className="botoesdecompra">Detalhes</button>
                        </div>
                    </div>
                    <div className = "produto">
                        <div className="fotoproduto">FOTO</div>
                        <h2 className = "Preco">XX,XX R$</h2>
                        <p className = "informaprod">infos: informações do produto fornecido</p>
                        <div>
                            <button className="botoesdecompra">Comprar</button>
                            <button className="botoesdecompra">Detalhes</button>
                        </div>
                    </div>
            </div>  
         </div>
         <div className="linha1">
            <div className = "center3">  
            <div className = "produto">
                        <div className="fotoproduto">FOTO</div>
                        <h2 className = "Preco">XX,XX R$</h2>
                        <p className = "informaprod">infos: informações do produto fornecido</p>
                        <div>
                            <button className="botoesdecompra">Comprar</button>
                            <button className="botoesdecompra">Detalhes</button>
                        </div>
                    </div>
                    <div className = "produto">
                        <div className="fotoproduto">FOTO</div>
                        <h2 className = "Preco">XX,XX R$</h2>
                        <p className = "informaprod">infos: informações do produto fornecido</p>
                        <div>
                            <button className="botoesdecompra">Comprar</button>
                            <button className="botoesdecompra">Detalhes</button>
                        </div>
                    </div>
                    <div className = "produto">
                        <div className="fotoproduto">FOTO</div>
                        <h2 className = "Preco">XX,XX R$</h2>
                        <p className = "informaprod">infos: informações do produto fornecido</p>
                        <div>
                            <button className="botoesdecompra">Comprar</button>
                            <button className="botoesdecompra">Detalhes</button>
                        </div>
                    </div>
            </div>  
         </div>
    </div>
  </div>)
}

export default Main
