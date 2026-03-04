// 1. Importe o Link no topo do arquivo
import { Link } from 'react-router-dom';

interface ChurchCardProps {
    imageText: string;
    title: string;
    description: string;
    linkUrl: string;
}

export default function ChurchCard({ imageText, title, description, linkUrl }: ChurchCardProps) {
    return (
        <div className="bg-[#FDEFDE] border border-[#A48267] rounded-[8px] p-[20px] w-[300px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.03] hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex flex-col text-left">
            
            <div className="bg-[#A48267] h-[150px] rounded-[5px] flex items-center justify-center text-white mb-[15px] font-bold">
                {imageText}
            </div>
            
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