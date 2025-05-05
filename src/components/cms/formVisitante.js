'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import "../../styles/formVisitante.css";

const FormVisitante = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/cms/homeLogado');
  };

  return (
    <div className="container-md container-visitante">
      <div className="title-visitante">
        <p>Tela de</p>
        <h3>Cadastro de visitantes</h3>
      </div>
      <form action="" className="form-visitante">
        <div className="row">
          <input type="text" className="inp-usu" placeholder="Usuário:" />
        </div>
        <div className="row">
          <input type="tel" className="inp-celular" placeholder="Celular: (**)*****-****" />
        </div>
        <div className="row">
          <button type="submit" className="cadastrar">Cadastrar</button>
          <button type="button" className="voltar" onClick={handleRedirect}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default FormVisitante;
