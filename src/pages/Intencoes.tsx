import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Intencoes() {
    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* CABEÇALHO (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Intenções de Missa
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[800px] mx-auto">
                        Coloque as suas intenções no altar do Senhor. Preencha o formulário abaixo para incluir seus pedidos nas nossas celebrações.
                    </p>
                </section>

                {/* ÁREA DO FORMULÁRIO */}
                <section className="max-w-[800px] mx-auto px-[20px] mt-[60px]">
                    
                    <div className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-t-[4px] border-mostarda">
                        
                        <div className="text-center mb-[30px]">
                            <i className="fa-solid fa-scroll text-[40px] text-marrom-claro mb-[15px]"></i>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[10px]">
                                Formulário de Intenções
                            </h2>
                            <p className="text-cinza-escuro text-[16px]">
                                Pedimos que envie as suas intenções com pelo menos <strong className="text-marrom-escuro">24 horas de antecedência</strong> do horário da missa desejada para que a nossa secretaria possa organizar a liturgia.
                            </p>
                        </div>

                        {/* O GOOGLE FORMS FICA AQUI */}
                        <div className="w-full overflow-hidden rounded-[8px] flex justify-center">
                            {/* SUBSTITUA O LINK DO SRC PELO LINK DO SEU GOOGLE FORMS */}
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfsNBZ2QXBc2GX9Zq8tfzk_CPOd8Xd4RHigR_G185g9Q8b2_Q/viewform?usp=publish-editor" 
                                className="w-full min-h-[800px]" 
                                frameBorder="0" 
                                marginHeight={0} 
                                marginWidth={0}
                                title="Formulário de Intenções de Missa"
                            >
                                Carregando formulário...
                            </iframe>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}