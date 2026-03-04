import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Matriz from './pages/churchs/Matriz'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RoutesApp(){
    return(
        
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/matriz' element={<Matriz/>} />
                <Route path='/contatos' element={<Contacts/>} />
            </Routes>
            <Footer/>
        </HashRouter>
    )
}