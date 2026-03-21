import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFound() {
    return (
        <>
            <Header />

            {/* min-h-[70vh] garante que o rodapé não suba caso a tela seja muito grande */}
            <main className="bg-branco-amarelado min-h-[70vh] flex flex-col items-center justify-center px-[20px] text-center py-[80px]">
                
                {/* Ícone para ilustrar que a pessoa está perdida (usa o FontAwesome que você já tem) */}
                <i className="fa-solid fa-map-location-dot text-[80px] md:text-[100px] text-marrom-claro/50 mb-[20px]"></i>

                <h1 className="text-[80px] md:text-[120px] font-bold text-marrom-claro/30 leading-none mb-[10px] select-none">
                    404
                </h1>
                
                <h2 className="text-[32px] md:text-[40px] font-bold text-marrom-escuro mb-[20px]">
                    Parece que você se perdeu...
                </h2>
                
                <p className="text-[18px] md:text-[20px] text-cinza-escuro max-w-[600px] mb-[40px]">
                    A página que você está procurando não foi encontrada em nosso servidor. Ela pode ter sido movida, excluída ou o endereço digitado está incorreto.
                </p>
                
                {/* Botão para resgatar o usuário e mandá-lo de volta para a Home */}
                <a 
                    href="/"
                    className="bg-mostarda text-marrom-escuro py-[15px] px-[40px] text-[18px] font-bold rounded-[5px] inline-block transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-lg shadow-md"
                >
                    Voltar para a Página Inicial
                </a>

            </main>

            <Footer />
        </>
    );
}