import { Link } from 'react-router-dom'

function Detalhes() {
    return(
        <div>
            <h1>Mais informações</h1>
            {/* <a href='/'><a> */}
            <Link to='/'>Contato</Link>
        </div>
    )
}

export default Detalhes