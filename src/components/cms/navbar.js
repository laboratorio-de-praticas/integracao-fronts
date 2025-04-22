import { useRouter } from "next/router";
import "../../styles/navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ abrirMenu, tipoUsuario = null }) => {
  const router = useRouter();
  const caminhoAtual = router.pathname;

  const estaNoIndex = caminhoAtual === "/";

  return (
    <nav className="navbar navbar-expand-lg nav-padrao">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="logo-cps-55"
            src="/imgs/2024_logo_55anos_cps_gov_24-25_regua_horizontal+horizontal_br 1.png"
            alt=""
            width={235.24}
            height={56.8}
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* Logo Fatec */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img
                  className="logo-fatec-registro"
                  src="/imgs/fatec_ra_registro_registro_br.png"
                  alt=""
                  width={87.57}
                  height={55.2}
                />
              </a>
            </li>

            {/* Home */}
            <li className="nav-item home-item">
              <a
                className={`nav-link ${
                  ["/homeLogado", "/"].includes(caminhoAtual) ? "active-page" : ""
                }`}
                href="/homeLogado"
              >
                Home
              </a>
            </li>

            <span className="separador">|</span>

            {/* Apenas se estiver no index (deslogado) */}
            {estaNoIndex && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cadastro
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/cadastro/usuario">
                      Usuário
                    </a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="/cadastro/projeto">
                      Projeto
                    </a>
                  </li>
                </ul>
              </li>
            )}

            {/* Se não estiver no index, mostra conforme o tipo de usuário */}
            {!estaNoIndex && tipoUsuario === "adm" && (
              <>
                <li className="nav-item">
                  <a
                    className={`nav-link ${caminhoAtual === "/gerenciar" ? "active-page" : ""}`}
                    href="/gerenciar"
                  >
                    Gerenciar
                  </a>
                </li>
                <span className="separador">|</span>
                <li className="nav-item">
                  <a
                    className={`nav-link ${caminhoAtual === "/pedidos" ? "active-page" : ""}`}
                    href="/pedidos"
                  >
                    Pedidos
                  </a>
                </li>
                <span className="separador">|</span>
                <li className="nav-item">
                  <a
                    className={`nav-link ${caminhoAtual === "/eventos" ? "active-page" : ""}`}
                    href="/eventos"
                  >
                    Eventos
                  </a>
                </li>
              </>
            )}

            {!estaNoIndex && tipoUsuario === "aluno" && (
              <li className="nav-item">
                <a
                  className={`nav-link ${caminhoAtual === "/cadastro/projeto" ? "active-page" : ""}`}
                  href="/cadastro/projeto"
                >
                  Cadastrar
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Exibir perfil apenas se não for index */}
        {!estaNoIndex && (
          <div className="perfil-retangulo">
            <img
              src="/imgs/foto-perfil.png"
              alt="Foto de Perfil"
              className="foto-perfil"
            />
            <div className="info-perfil">
              <span className="nome-perfil">José Alves da Silva</span>
              <span className="turma-perfil">DSM-4</span>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                abrirMenu();
              }}
            >
              <img src="/imgs/vector-down.svg" alt="" className="icon-vector" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
