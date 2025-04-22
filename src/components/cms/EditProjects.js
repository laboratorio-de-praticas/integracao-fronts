import React, { useState } from 'react';
import './edit-projects.css';

function EditProjects() {
  const [projetos, setProjetos] = useState([
    { id: 1, titulo: 'App de Tarefas', descricao: 'Controle de atividades diárias' },
    { id: 2, titulo: 'Blog Pessoal', descricao: 'Publicação de textos e artigos' },
  ]);

  const [editandoId, setEditandoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState({ titulo: '', descricao: '' });

  const handleEdit = (projeto) => {
    setEditandoId(projeto.id);
    setDadosEdicao({ titulo: projeto.titulo, descricao: projeto.descricao });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosEdicao({ ...dadosEdicao, [name]: value });
  };

  const handleSave = (id) => {
    setProjetos(projetos.map((proj) =>
      proj.id === id ? { ...proj, ...dadosEdicao } : proj
    ));
    setEditandoId(null);
    setDadosEdicao({ titulo: '', descricao: '' });
  };

  return (
    <div className="edit-projects-container">
      <h2>Editar Projetos</h2>
      <ul>
        {projetos.map((proj) => (
          <li key={proj.id}>
            {editandoId === proj.id ? (
              <>
                <input
                  type="text"
                  name="titulo"
                  value={dadosEdicao.titulo}
                  onChange={handleChange}
                  placeholder="Título do projeto"
                />
                <input
                  type="text"
                  name="descricao"
                  value={dadosEdicao.descricao}
                  onChange={handleChange}
                  placeholder="Descrição do projeto"
                />
                <div className="project-actions">
                  <button className="edit-btn" onClick={() => handleSave(proj.id)}>Salvar</button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3>{proj.titulo}</h3>
                  <p>{proj.descricao}</p>
                </div>
                <div className="project-actions">
                  <button className="edit-btn" onClick={() => handleEdit(proj)}>Editar</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditProjects;
