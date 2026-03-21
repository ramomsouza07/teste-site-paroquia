// 1. Importe o Link no topo do arquivo
import { Link } from 'react-router-dom';

interface ChurchCardProps {
    imageUrl: string;    // 1. ADICIONADO: Nova prop para o caminho da imagem
    imageText: string;   // Usaremos isso para o texto alternativo (alt) da imagem
    title: string;
    description: string;
    linkUrl: string;
}

// 2. ADICIONADO: Incluir imageUrl nos argumentos recebidos
export default function ChurchCard({ imageUrl, imageText, title, description, linkUrl }: ChurchCardProps) {
    return (
        <div className="bg-[#FDEFDE] border border-[#A48267] rounded-[8px] p-[20px] w-[300px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.03] hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex flex-col text-left">
            
            {/* 3. ALTERADO: Substituída a <div> pelo placeholder por uma tag <img> */}
            {/* Mantivemos a altura (h-[150px]) e o arredondamento (rounded-[5px]) */}
            {/* object-cover impede que a imagem fique esticada/achatada */}
            <img 
                src={imageUrl} 
                alt={imageText} 
                className="h-[150px] w-full rounded-[5px] object-cover mb-[15px]" 
            />
            
            <h3 className="text-[#331905] text-[24px] mb-[10px]">
                {title}
            </h3>
            
            <p className="text-[#545454] text-[16px] flex-grow">
                {description}
            </p>
            
            {/* 2. Troque o <a> pelo <Link> e o 'href' pelo 'to' */}
            <Link 
                to={linkUrl} 
                className="border-[2px] border-[#A48267] text-[#331905] text-center py-[8px] px-[20px] rounded-[5px] font-bold inline-block mt-[15px] transition-all duration-300 hover:bg-[#A48267] hover:text-[#FDEFDE]"
            >
                Visitar Página
            </Link>

        </div>
    );
}