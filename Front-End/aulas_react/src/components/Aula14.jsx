import { estilos } from "../style/Estilos"
import { Link, useNavigate } from 'react-router-dom'

const Aula14 = () => {
    const navigate = useNavigate();

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr />
            <h3>Navegação com links do React Router</h3>
            <Link to='/'> Página Principal </Link>
            <br />
            <Link to='/sobre'> Página Sobre </Link>
            <br />
            <Link to='/sesisenai'> Página não encontrada </Link>
            <br />
            <h3>Navegação com programação utilizando o useNavigate</h3>
            <button onClick={() => navigate('/sobre')}>Sobre</button>

            <hr />
            <h3>Rota dinâmica com useParams
                <button onClick={() => navigate('/perfil/Lara')}>Perfil da Lara</button>
                <button onClick={() => navigate('/perfil/Nicoly')}>Perfil da Nicoly</button>
            </h3>
        </div>
    )
}

export default Aula14