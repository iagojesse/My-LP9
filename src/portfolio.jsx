import React from "react";
import "./style.css";
import imagesData from "./src/imagens/imagens.json";

function PortfolioTrabalhos() {
  return (
    <div className="pagina2">
      <header>
        <div className="button-group">
          <button id="btnContato">Contato</button>
          <button id="btnPortfolio">Portfólio</button>
          <button id="btnCurriculo">Currículo</button>
        </div>
      </header>
      <div className="sections">
        {imagesData.images
          .filter((image) => image.name !== "foto iago jesse")
          .map((image) => (
            <section key={image.id}>
              <img
                src={require(`./src/imagens/${image.file}`)}
                alt={image.name}
              />
            </section>
          ))}
      </div>
    </div>
  );
}

export default PortfolioTrabalhos;
