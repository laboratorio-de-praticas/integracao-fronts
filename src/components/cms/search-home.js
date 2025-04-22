import "../../styles/search-home.css";
import React from "react";

const SearchHome = () => {
  return (
    <div className="container-fluid container-filtros-dsm">
      <div className="row">
        <div className="col-12 d-flex flex-wrap align-items-center gap-2 mb-3">
          {/*btn todos*/}
          <div className="btn-group" role="group">
            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
            <label className="btn btn-cinza" htmlFor="option1">Todos</label>
            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
            <label className="btn btn-branco" htmlFor="option2">Candidatos</label>
          </div>

          {/* btn aluno e projeto */}
          <div className="btn-group" role="group">
            <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
            <label className="btn btn-cinza" htmlFor="option3">Aluno</label>
            <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" />
            <label className="btn btn-branco" htmlFor="option4">Projeto</label>
          </div>
          {/* pesquisa */}
          <div className="search-bar-dsm d-flex align-items-center flex-grow-1">
            <div className="search-input-container-dsm flex-grow-1 me-2">
              <img src="/imgs/search.svg" alt="Search" className="search-icon-dsm" />
              <input type="text" className="search-input-dsm w-100" placeholder="Pesquisar aluno" />
            </div>
            <button className="search-button-dsm">Pesquisar</button>
          </div>
        </div>

        {/*dropdown */}
        <div className="custom-dropdown-dsm">
            <select className="dropdown-select-dsm">
              <option value="dsm">DSM</option>
              <option value="ge">GE</option>
            </select>
            <img src="/imgs/drop-curso.svg" alt="Seta" className="dropdown-arrow-dsm" />
          </div>

      </div>
</div>

  );
};

export default SearchHome;
// autora: Isabele Letícia