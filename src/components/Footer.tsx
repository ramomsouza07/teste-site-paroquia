export default function Footer() {
    return (
        <footer className="bg-[#331905] text-[#FDEFDE] text-center pt-[40px] px-[20px] pb-[20px]  bottom-0 w-full z-50">
            <div>
                <p className="mb-[10px] text-[16px]">Paróquia Santuário São Fidélis de Sigmaringa - São Fidélis, RJ</p>
                <p className="mb-[10px] text-[16px]">Diocese de Campos dos Goytacazes</p>
                <p className="mb-[10px] text-[16px]">
                    WhatsApp: <a 
                        href="https://api.whatsapp.com/send?phone=552227581146" 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-bold text-white transition-colors duration-300 hover:text-[#D0A933]"
                    >
                        (22) 2758-1146
                    </a>
                </p>
            </div>
            
            {/* O border-white/10 cria exatamente aquele efeito do rgba(255,255,255,0.1) */}
            <div className="mt-[30px] pt-[20px] border-t border-white/10 text-[14px] text-[#aaaaaa]">
                <p>&copy; 2026 Santuário São Fidélis de Sigmaringa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}