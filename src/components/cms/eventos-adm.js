'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import "../../styles/eventos-adm.css";

const ShowEventos = () => {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="container-md container-eventos-adm">
      <div className="d-flex justify-content-center">
        <div className="row align-items-center" style={{ width: "100%" }}>
          <div className="col-6">
            <div className="title-eventos-adm">
              <p>Ver</p>
              <h3>Eventos</h3>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="btn-wrapper">
              <button className="ocultar" onClick={() => { /* lógica de ocultar */ }}>Ocultar Todos</button>
              <span>|</span>
              <button className="cadastrar" onClick={() => handleNavigate('/CadEvents')}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-evadm"></div>

      <div className="row">
        <div className="card-evento">
          <h3 className="evento-title">HubTec'25</h3>
          <div className="acoes-evento">
            <button className="editar-evento" onClick={() => handleNavigate('/editEvents')}>Editar</button>
            <button className="deletar-evento" onClick={() => { /* lógica para deletar */ }}>Deletar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowEventos;
