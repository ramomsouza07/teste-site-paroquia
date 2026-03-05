import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Joga a tela para o eixo X: 0, eixo Y: 0 (topo absoluto)
        window.scrollTo(0, 0);
    }, [pathname]); // Executa sempre que o 'pathname' (a URL) mudar

    return null; // Este componente não renderiza nada na tela
}