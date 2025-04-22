import React, { useState } from 'react';
import '../../src/styles/create-project.css';

function CreateProject() {
  const [projects, setProjects] = useState([
    { id: 1, titulo: 'Sistema Escolar', descricao: 'Plataforma para alunos e professores' },
    { id: 2, titulo: 'Site Portfólio', descricao: 'Apresentação de projetos pessoais' },
  ]);

  const [mostrarForm, setMostrarForm] = useState(false);
  const [novoProjeto, setNovoProjeto] = useState({ titulo: '', descricao: '' });

  const toggleFormulario = () => {
    setMostrarForm((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProjeto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoId = projects.length + 1;
    setProjects((prev) => [...prev, { id: novoId, ...novoProjeto }]);
    setNovoProjeto({ titulo: '', descricao: '' });
    setMostrarForm(false);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="create-project-container">
      <h2>Projetos</h2>

      <button className="botao-novo" onClick={toggleFormulario}>
        {mostrarForm ? 'Cancelar' : 'Novo Projeto'}
      </button>

      {mostrarForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={novoProjeto.titulo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="descricao"
            placeholder="Descrição"
            value={novoProjeto.descricao}
            onChange={handleChange}
            required
          />
          <button type="submit">Salvar</button>
        </form>
      )}

      <div className="lista-projetos">
        {projects.map((p) => (
          <div key={p.id} className="projeto">
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <button
              className="botao-excluir"
              onClick={() => handleDelete(p.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateProject;
