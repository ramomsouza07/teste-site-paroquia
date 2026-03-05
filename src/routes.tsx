import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import Matriz from './pages/churchs/Matriz'
import Services from './pages/Services'
import Contacts from './pages/Contacts'

export default function RoutesApp(){
    return(
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/matriz' element={<Matriz/>} />

                <Route path="/servicos" element={<Services />} />
                <Route path='/contatos' element={<Contacts/>} />
            </Routes>
        </HashRouter>
    )
}