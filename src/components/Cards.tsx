import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="bg-[#FDEFDE] border border-[#A48267] rounded-[12px] py-[40px] px-[30px] w-160 text-center shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex flex-col justify-center">
            
            {/* Título do Card (H2) */}
            <h2 className="text-[#331905] text-[36px] mb-[25px] border-b-[3px] border-[#D0A933] pb-[10px] self-center inline-block">
                {title}
            </h2>
            
            {/* Conteúdo do Card. 
              O [&_p] significa: "Aplique este estilo em todos os <p> que estiverem aqui dentro" 
            */}
            <div className="[&_p]:text-[18px] [&_p]:text-[#545454] [&_p]:mb-[12px]">
                {children}
            </div>

        </div>
    );
}