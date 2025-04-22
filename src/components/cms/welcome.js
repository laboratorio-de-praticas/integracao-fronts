import "../../styles/welcome.css"
const Welcome = () => {
    return (
        <div className="container-fluid bem-vindo-container">
            <div className="row justify-content-center text-start">
                <div className="col-12">
                    <p className="bem-vindo">Bem-vindo ao</p>
                    <h2 className="cms"> CMS - Sistema de Gerenciamento de Conteúdo</h2>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
