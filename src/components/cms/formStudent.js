import { useState, useEffect } from 'react';
import "../../styles/form-student.css";

const FormStudent = () => {
    const [formData, setFormData] = useState({
        nome: '',
        ra: '',
        email_institucional: '',
        telefone: '',
        senha: '',
        ano_ingresso: '',
        turma_atual: '',
        data_nasc: '',
        deseja_ser_candidato: false,  
        deseja_ser_lider: false,
        curso: '',
        foto: null,
        descricao_campanha: '',
    });

    const [dateFocused, setDateFocused] = useState(false);
    const [showPopup, setShowPopup] = useState(true);
    const [showRepresentativePopup, setShowRepresentativePopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Simula envio de formulário (você pode substituir por um fetch/axios depois)
      console.log("Enviando dados do formulário:", formData);
    
      if (formData.deseja_ser_lider) {
        // Redireciona para a página de candidatura
        window.location.href = "/eventosCandidatura";
      } else {
        // Continua com a lógica padrão, sem redirecionar
        alert("Cadastro realizado com sucesso!");
      }
    };
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            foto: file
        }));
    };

    return (
      <>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h5 className="fw-bold">
                Para prosseguir, confirme seu cadastro
              </h5>
              <br />
              <button
                className="btn btn-success"
                onClick={() => setShowPopup(false)}
              >
                Ok
              </button>
            </div>
          </div>
        )}


        {/* Formulário principal */}
        <div className="divider-verde"></div>
        <div className="container-md container-form-student">
          <div className="title-form-student">
            <div className="col-md-12 text-left my-3">
              <h5 className="mb-0">Continuação do</h5>
              <h3 className="fw-bold">Cadastro de Alunos</h3>
              <div className="divider"></div>
            </div>
          </div>
          <form
            className="form-student"
            method="POST"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form-grid">
              {/* Lado esquerdo */}
              <div className="foto-container">
                <div className="photo-box">
                  <input
                    type="file"
                    accept="image/*"
                    id="imageUpload"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="imageUpload">
                    <img
                      src="/imgs/camera.svg"
                      width={80}
                      height={80}
                      alt="Upload Image"
                    />
                  </label>
                </div>
              </div>

              {/* Lado direito */}
              <div className="info-container">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="deseja_ser_lider"
                      checked={formData.deseja_ser_lider}
                      onChange={handleChange}
                      className="check-lider"
                    />
                    Desejo me candidatar a representante de classe.
                  </label>
                </div>

                {formData.deseja_ser_lider && (
                  <div className="form-field">
                    <textarea
                      name="descricao_campanha"
                      value={formData.descricao_campanha}
                      onChange={handleChange}
                      className="styled-input inp-nome"
                      placeholder="Descrição da campanha:"
                      rows={4}
                    />
                  </div>
                )}


                <div className="form-field">
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="styled-input inp-nome"
                    placeholder="Nome:"
                  />
                </div>

                <div className="form-row">
                  <div className="col-6">
                    <div className="form-field ra">
                      <input
                        type="text"
                        name="ra"
                        value={formData.ra}
                        onChange={handleChange}
                        className="styled-input inp-ra"
                        placeholder="RA:"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-field data">
                      <input
                        type={dateFocused ? "date" : "text"}
                        onFocus={() => setDateFocused(true)}
                        name="ano_ingresso"
                        value={formData.ano_ingresso}
                        onChange={handleChange}
                        className="styled-input inp-data"
                        placeholder="Data de Matrícula:"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-6">
                    <div className="form-field email">
                      <input
                        type="email"
                        name="email"
                        className="styled-input inp-email"
                        placeholder="E-mail:"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-field sem">
                      <input
                        type="text"
                        name="turma_atual"
                        value={formData.turma_atual}
                        onChange={handleChange}
                        className="styled-input inp-sem"
                        placeholder="Semestre Atual: (ex.:DSM1)"
                      />
                    </div>
                  </div>
                </div>

                <div className="row-final">
                    <div className="campo-final">
                      <div className="form-field senha">
                        <input
                          type="password"
                          onFocus={() => setDateFocused(true)}
                          name="ano_ingresso"
                          value={formData.ano_ingresso}
                          onChange={handleChange}
                          className="styled-input inp-data"
                          placeholder="Senha:"
                        />
                      </div>
                    </div>

                    <div className="button-group">
                      <button type="submit" className="btn btn-success">
                        Cadastrar
                      </button>
                      <a href="/eventosCandidatura" className="btn btn-outline-danger">
                        Cancelar
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
};

export default FormStudent;
