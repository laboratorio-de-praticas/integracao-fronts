'use client'; // Necessário para usar hooks no App Router

import { useRouter } from 'next/navigation'; // ✅ Nova importação correta
import { useUser } from '../../context/userContext';
import "../../styles/index-options.css";

const IndexOptions = () => {
  const router = useRouter();
  const { userType } = useUser();

  const handleRedirect = (path) => {
    console.log(`Redirecionando para: ${path}`);
    router.replace(path); // Mantido, funciona com next/navigation
  };

  return (
    <div className="container-fluid options">
      <div className="row-index">

        {/* === Botões exclusivos para ADMINISTRADOR === */}
        {userType === "adm" && (
          <>
            <div className="col-auto">
              <button className="btn-option visitante" onClick={() => handleRedirect('/cms/cadVisitante')}>
                <img src="/imgs/cadastro-visitante-branco.svg" alt="" width={90} height={90} />
                <span>Cadastro Visitante</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option sistema" onClick={() => handleRedirect('/cms/gerenciar')}>
                <img src="/imgs/entrar-sistema.svg" alt="" width={90} height={90} />
                <span>Entrar Sistema</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option pedidos" onClick={() => handleRedirect('/cms/pedidos')}>
                <img src="/imgs/gerenciar-pedidos.svg" alt="" width={90} height={90} />
                <span>Gerenciar Pedidos</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option eventos" onClick={() => handleRedirect('/cms/eventos')}>
                <img src="/imgs/ver-eventos.svg" alt="" width={90} height={90} />
                <span>Ver eventos</span>
              </button>
            </div>
          </>
        )}

        {/* === Botões exclusivos para ALUNO === */}
        {userType === "aluno" && (
          <>
            <div className="col-auto">
              <button className="btn-option projeto" onClick={() => handleRedirect('/cms/formProject')}>
                <img src="/imgs/cadastro-proj.svg" alt="" width={90} height={90} />
                <span>Cadastrar Projeto</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option edit-projeto" onClick={() => handleRedirect('/cms/editProject')}>
                <img src="/imgs/edit-proj.svg" alt="" width={90} height={90} />
                <span>Editar Projeto</span>
              </button>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default IndexOptions;
