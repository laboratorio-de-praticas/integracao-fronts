import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import "../../styles/form-student.css";

const EditStudent=()=>{
    const router = useRouter();
    const { id } = router.query;

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
    });

    const handleCursoChange = (cursoSelecionado) => {
        setFormData(prev => ({
            ...prev,
            curso: cursoSelecionado
        }));
    };

    const [dateFocused, setDateFocused] = useState(false);
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    // 🟢 Carrega os dados do usuário (modo edição)
    useEffect(() => {
        if (!id) return;
        const fetchUserData = async () => {
            try {
                const res = await fetch(`/api/usuarios/${id}`);
                const data = await res.json();
                if (res.ok && data.dados) {
                    const u = data.dados;
                    setFormData(prev => ({
                        ...prev,
                        nome: u.nome || '',
                        email_institucional: u.email_institucional || '',
                        telefone: u.telefone || '',
                        curso: u.curso || '',
                        ra: u.dados_aluno?.ra || '',
                        turma_atual: u.dados_aluno?.curso_semestre || '',
                        deseja_ser_candidato: u.dados_aluno?.deseja_ser_candidato || false,
                        // senha deixamos vazia
                    }));
                } else {
                    alert('Erro ao buscar dados do usuário.');
                }
            } catch (err) {
                console.error('Erro ao carregar dados do usuário:', err);
            }
        };
        fetchUserData();
    }, [id]);

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

        const payload = {
            nome: formData.nome,
            email_institucional: formData.email_institucional,
            telefone: formData.telefone,
            senha: formData.senha || undefined,
            status_usuario: 'Ativo',
            dados_aluno: {
                ra: formData.ra,
                curso_semestre: formData.turma_atual,
                deseja_ser_candidato: formData.deseja_ser_candidato
            }
        };

        try {
            const response = await fetch(`/api/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Usuário atualizado com sucesso!');
                router.push('/');
            } else {
                alert(`Erro: ${result.mensagem}`);
            }
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            alert('Erro ao enviar atualização.');
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
                    <h5 className="fw-bold">Para prosseguir, confirme seu cadastro</h5>
                    <br />
                    <button className="btn btn-success" onClick={() => setShowPopup(false)}>Ok</button>
                </div>
            </div>
        )}
        <div className="divider-verde"></div>
        <div className="container-md container-form-student">
            <div className="title-form-student">
                <div className="col-md-12 text-left my-3">
                    <h5 className="mb-0">Edição de</h5>
                    <h3 className="fw-bold">Alunos</h3>
                    <div className="divider"></div>
                </div>
            </div>
            <form className="form-student" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-grid">
                    {/* Lado esquerdo: foto */}
                    <div className="foto-container">
                        <div className="photo-box">
                            <input 
                                type="file" 
                                accept="image/*" 
                                id="imageUpload" 
                                style={{ display: 'none' }} 
                                onChange={handleImageChange} 
                            />
                            <label htmlFor="imageUpload">
                                <img src="/imgs/camera.svg" width={80} height={80} alt="Upload Image" />
                            </label>
                        </div>
                    </div>

                    {/* lado direito */}
                    <div className="info-container">
                        {/* toggle e checkbox */}
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="toggle-group">
                                <button type="button" className={formData.curso === 'DSM' ? 'active' : ''} onClick={() => handleCursoChange('DSM')}>DSM</button>
                                <button type="button" className={formData.curso === 'GE' ? 'active' : ''} onClick={() => handleCursoChange('GE')}>GE</button>
                            </div>

                            <label className="checkbox-label">
                                <input type="checkbox" name="deseja_ser_lider" checked={formData.deseja_ser_lider} onChange={handleChange} className='check-lider' />
                                Desejo me cadastrar como Líder do PI que participo
                            </label>
                        </div>

                        {/* Campos */}
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

                        <div className="row-final">
                            <div className="campo-final">
                                <input 
                                    type="number" 
                                    name="turma_atual" 
                                    value={formData.turma_atual} 
                                    onChange={handleChange} 
                                    className="styled-input inp-sem"
                                    placeholder="Semestre Atual:"
                                />
                            </div>

                            <div className="button-group mt-3">
                                <button type="submit" className="btn btn-warning">Editar</button>
                                <a href="/" className="btn btn-outline-danger">Cancelar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>

    )
}
export default EditStudent