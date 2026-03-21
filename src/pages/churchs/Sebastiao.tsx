import Footer from "../../components/Footer";
import Header from "../../components/Header";

// Lembre-se de importar as imagens reais da Capela de São Sebastião
// Esta é a imagem que já está a usar na página Home
import imgFachada from '../../assets/sao_sebastiao/sao_sebastiao.png'; 
import imgInterior from '../../assets/sao_sebastiao/sao_sebastiao_4.jpg';   // Substitua por uma terceira fotografia, se tiver

import imgRosto from '../../assets/sao_sebastiao/sao_sebastiao-rosto.jpg'; 

export default function Sebastiao() {
    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* 1. CABEÇALHO DA CAPELA (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Capela São Sebastião
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[800px] mx-auto">
                        A nossa comunidade localizada no bairro Ipuca. Um lugar de fé, devoção e encontro fraterno com Cristo.
                    </p>
                </section>

                {/* 2. INFORMAÇÕES, HORÁRIOS E MAPA */}
                <section className="max-w-[900px] mx-auto px-[20px] mt-[60px]">
                    
                    {/* Grid de Horários e Localização */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        
                        {/* Card de Horários */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-mostarda flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px]">
                            <i className="fa-solid fa-clock text-[40px] text-mostarda mb-[15px]"></i>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[10px]">
                                Horário de Missa
                            </h2>
                            <p className="text-cinza-escuro text-[18px] mb-[15px]">
                                A capela conta atualmente com missa semanal aos:
                            </p>
                            <p className="text-marrom-escuro text-[22px] font-bold bg-mostarda/20 py-[10px] px-[20px] rounded-[5px] w-full mb-[15px] border border-mostarda/30">
                                Domingos, às 10 horas
                            </p>
                            <p className="text-cinza-escuro text-[14px]">
                                📲 Fique atento à agenda semanal do Santuário para possíveis alterações.
                            </p>
                        </div>

                        {/* Card de Localização */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-mostarda flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px]">
                            <i className="fa-solid fa-location-dot text-[40px] text-mostarda mb-[15px]"></i>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[10px]">
                                Onde Estamos
                            </h2>
                            <p className="text-cinza-escuro text-[18px] mb-[15px]">
                                Venha visitar-nos e viver este momento de graça connosco!
                            </p>
                            <p className="text-marrom-escuro font-bold text-[16px] bg-branco-amarelado py-[10px] px-[20px] rounded-[5px] w-full border border-marrom-claro/20">
                                R. Loureiro, Vila Tiao Paulo <br/>
                                São Fidélis, RJ, 28400-000
                            </p>
                            <p className="text-marrom-claro text-[15px] mt-[15px] font-bold">
                                📍 A  1,8 km do Santuário.
                            </p>
                        </div>

                    </div>

                    {/* Mapa do Google embutido */}
                    <div className="mt-[30px] w-full bg-branco rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro overflow-hidden">
                        {/* Lembre-se de trocar este src pelo link real do Google Maps da Capela São Sebastião */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.504596720861!2d-41.74143820104571!3d-21.644219886993476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb23eacabe4ef%3A0x572e3034356cb7ce!2sCapela%20de%20S%C3%A3o%20Sebasti%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1774113004089!5m2!1spt-BR!2sbr" 
                            className="w-full h-[350px] md:h-[450px]" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de localização da Capela São Sebastião"
                        ></iframe>
                    </div>

                </section>

                {/* 3. GALERIA DE FOTOGRAFIAS E ORAÇÃO FINAL */}
                <section className="max-w-[1000px] mx-auto px-[20px] mt-[40px] mb-[40px]">
                    <div className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro text-center">
                        
                        {/* Grid de Fotografias: A 1ª fotografia ocupa 2 colunas para manter a elegância */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[40px]">
                            
                            <img 
                                src={imgFachada} 
                                alt="Fachada da Capela São Sebastião" 
                                className="w-full h-[450px] md:h-[500px] object-cover rounded-[8px] shadow-sm transition-transform duration-300 hover:scale-[1.02] object-center md:col-span-2"
                            />
                            
                            <img 
                                src={imgInterior} 
                                alt="Interior da Capela São Sebastião" 
                                className="w-full h-[450px] md:h-[500px] object-cover rounded-[8px] shadow-sm transition-transform duration-300 hover:scale-[1.02] object-center"
                            />
                            <img 
                                src={imgRosto} 
                                alt="Imagem de São Sebastião" 
                                className="w-full h-[450px] md:h-[500px] object-cover rounded-[8px] shadow-sm transition-transform duration-300 hover:scale-[1.02] object-center"
                            />
                            
                        </div>

                        {/* Mensagem Final */}
                        <div className="border-t border-marrom-claro/30 pt-[30px]">
                            <h2 className="text-marrom-escuro text-[24px] md:text-[28px] font-bold italic font-serif leading-relaxed">
                                "Glorioso mártir São Sebastião, rogai por nós!" <br/>
                                "São Fidélis de Sigmaringa, rogai por nós!"
                            </h2>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}