import { Link } from 'react-router-dom'

function Inicio() {
    return(
        <div>
            <h1>Bem-Vindo</h1>
            {/* <a href='/'><a> */}
            <Link to='/'>Detalhes</Link>
        </div>
    )
}

export default Inicio