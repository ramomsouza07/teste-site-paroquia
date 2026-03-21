import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contatos() {
    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* 1. CABEÇALHO (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Fale Conosco
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[600px] mx-auto">
                        Estamos aqui para acolher, informar e evangelizar. Escolha o setor desejado abaixo:
                    </p>
                </section>

                {/* 2. CARDS DE CONTATO (Secretaria e PASCOM) */}
                <section className="max-w-[1000px] mx-auto px-[20px] mt-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px]">
                        
                        {/* CARD 1: SECRETARIA PAROQUIAL */}
                        <div className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[5px] border-marrom-claro flex flex-col h-full">
                            
                            <div className="text-marrom-claro text-[40px] mb-[15px] text-center">
                                <i className="fa-solid fa-church"></i>
                            </div>
                            
                            <h2 className="text-marrom-escuro text-[28px] font-bold mb-[15px] text-center">
                                Secretaria Paroquial
                            </h2>
                            
                            <p className="text-cinza-escuro text-[16px] text-center mb-[25px] flex-grow">
                                Entre em contato para informações sobre batizados, casamentos, intenções de missa, catequese e documentos paroquiais.
                            </p>
                            
                            <div className="bg-branco-amarelado p-[20px] rounded-[8px] mb-[25px]">
                                <h3 className="text-marrom-escuro font-bold mb-[10px]">Horário de Atendimento:</h3>
                                <p className="text-cinza-escuro text-[15px] mb-[5px]">
                                    <strong className="text-marrom-claro">Seg a Sex:</strong> 8h às 12h e 14h às 17h
                                </p>
                                <p className="text-cinza-escuro text-[15px]">
                                    <strong className="text-marrom-claro">Sábados:</strong> 8h às 11h30
                                </p>
                            </div>

                            <a 
                                href="https://api.whatsapp.com/send?phone=552227581146" 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-full bg-marrom-escuro text-white text-center py-[12px] px-[20px] rounded-[5px] font-bold text-[18px] transition-all duration-300 hover:bg-marrom-claro hover:shadow-lg flex items-center justify-center gap-[10px]"
                            >
                                <i className="fa-brands fa-whatsapp text-[22px]"></i>
                                Falar com a Secretaria
                            </a>
                        </div>

                        {/* CARD 2: PASCOM (Pastoral da Comunicação) */}
                        <div className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[5px] border-mostarda flex flex-col h-full">
                            
                            <div className="text-mostarda text-[40px] mb-[15px] text-center">
                                <i className="fa-solid fa-camera-retro"></i>
                            </div>
                            
                            <h2 className="text-marrom-escuro text-[28px] font-bold mb-[15px] text-center">
                                PASCOM
                            </h2>
                            
                            <p className="text-cinza-escuro text-[16px] text-center mb-[25px] flex-grow">
                                Setor responsável pelo site, redes sociais, transmissões ao vivo, avisos paroquiais e cobertura fotográfica dos eventos.
                            </p>
                            
                            <div className="bg-branco-amarelado p-[20px] rounded-[8px] mb-[25px]">
                                <h3 className="text-marrom-escuro font-bold mb-[10px]">Nossas Redes:</h3>
                                <div className="flex gap-[15px]">
                                    <a href="https://www.instagram.com/pascom.sf/" target="_blank" rel="noreferrer" className="text-marrom-claro text-[24px] hover:text-mostarda transition-colors"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/paroquiasantuariosaofidelis/" target="_blank" rel="noreferrer" className="text-marrom-claro text-[24px] hover:text-mostarda transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                                <p className="text-cinza-escuro text-[14px] mt-[10px]">
                                    Acompanhe nossas atualizações diárias e assista às missas online!
                                </p>
                            </div>

                            {/* Altere o link do mailto para o e-mail real da PASCOM */}
                            <a 
                                href="mailto:matrizdesaofidelis@gmail.com" 
                                className="w-full bg-mostarda text-marrom-escuro text-center py-[12px] px-[20px] rounded-[5px] font-bold text-[18px] transition-all duration-300 hover:bg-marrom-claro hover:text-branco hover:shadow-lg flex items-center justify-center gap-[10px]"
                            >
                                <i className="fa-solid fa-envelope text-[20px]"></i>
                                Enviar E-mail
                            </a>
                        </div>

                    </div>
                </section>

                {/* 3. ENDEREÇO E MAPA (Opcional, mas muito útil) */}
                <section className="max-w-[1000px] mx-auto px-[20px] mt-[60px]">
                    <h2 className="text-marrom-escuro text-[28px] font-bold mb-[20px] text-center">
                        Onde Estamos
                    </h2>
                    <div className="bg-branco p-[20px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-center">
                        <p className="text-cinza-escuro text-[18px] mb-[20px]">
                            <i className="fa-solid fa-location-dot text-marrom-claro mr-[10px]"></i>
                            Praça São Fidélis, s/n - Centro, São Fidélis - RJ, 28400-000
                        </p>
                        
                        {/* Iframe do Google Maps da Praça de São Fidélis */}
                        <div className="w-full h-[300px] rounded-[5px] overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.43804203303!2d-41.74987148889658!3d-21.64681098007901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb307db6b488f%3A0xdbbd4bcd1b6dfe63!2zU2FudHXDoXJpbyBkZSBTw6NvIEZpZMOpbGlz!5e0!3m2!1spt-BR!2sbr!4v1774067359339!5m2!1spt-BR!2sbr" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={false} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa da Igreja Matriz"
                            ></iframe>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}