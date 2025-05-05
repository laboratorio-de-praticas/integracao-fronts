'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../../styles/form-events.css";

const FormEvents = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    foto: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      foto: file,
    }));
  };

  const handleCancel = () => {
    router.back(); // ou router.push('/alguma-rota') se quiser redirecionar
  };

  return (
    <div className="container-md container-cadevento">
      <div className="row">
        <div className="col-6">
          <div className="title-cadevento">
            <p>Cadastro de</p>
            <h3>Eventos</h3>
          </div>
        </div>
        <div className="col-6">
          <div className="status-desativar">
            <div className="status">
              <p className="ativ">Ativado</p>
            </div>
            <button className="desativar">Desativar</button>
          </div>
        </div>
      </div>

      <div className="divider-cadevento"></div>

      <form>
        <div className="row">
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

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control nome-evento"
              placeholder="Nome:"
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control tipo-evento"
              placeholder="Tipo:"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control semestre-evento"
              placeholder="Semestre:"
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control ano-semestre-evento"
              placeholder="Ano do Semestre:"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-3">
            <textarea
              className="form-control descricao-evento"
              placeholder="Descrição:"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <button type="submit" className="btn concluir-evento w-100">
              Concluir
            </button>
          </div>
          <div className="col-md-6 mb-3">
            <button
              type="button"
              className="btn cancelar-evento w-100"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEvents;
