import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import Matriz from './pages/churchs/Matriz'
import Vicente from './pages/churchs/Vicente'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import SagradaFamilia from './pages/churchs/SagradaFamilia';
import Sebastiao from './pages/churchs/Sebastiao';

import NotFound from './pages/NotFound';

export default function RoutesApp(){
    return(
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/matriz' element={<Matriz/>} />
                <Route path="/capela-sao-vicente" element={<Vicente />} />
                <Route path="/capela-sao-sebastiao" element={<Sebastiao />} />
                <Route path="/capela-sagrada-familia" element={<SagradaFamilia />} />

                <Route path="/servicos" element={<Services />} />
                <Route path='/contatos' element={<Contacts/>} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}