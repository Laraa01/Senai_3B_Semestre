import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './pages/Principal'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'
import Inicio from './pages/Inicio'
import Contato from './pages/Contato'
import Detalhes from './pages/Detalhes'

function App () {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Principal /> } />
            <Route path='/sobre' element={ <Sobre /> } />
            <Route path='/detalhes' element={ <Inicio /> } />
            <Route path='/inicio' element={ <Contato /> } />
            <Route path='/contato' element={ <Detalhes /> } />
            <Route path='/perfil/:nome' element={ <Perfil /> } />
            <Route path='*' element={ <NotFound /> } />

        </Routes>
        </BrowserRouter>
    )
}

export default App