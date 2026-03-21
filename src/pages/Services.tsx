import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Servicos() {
    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* 1. CABEÇALHO (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Serviços Paroquiais
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[700px] mx-auto">
                        Informações sobre sacramentos, formações e atendimentos em nossa paróquia.
                    </p>
                </section>

                {/* 2. GRID DE SERVIÇOS E SACRAMENTOS */}
                <section className="max-w-[1200px] mx-auto px-[20px] mt-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        
                        {/* CONFISSÕES E DIREÇÃO ESPIRITUAL */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-hands-praying"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Confissões
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                O Sacramento da Reconciliação nos devolve a graça e a amizade com Deus. O atendimento com o padre ocorre semanalmente na Matriz.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    <strong className="text-marrom-escuro">Quintas-feiras:</strong> 14h às 16h<br/>
                                    <strong className="text-marrom-escuro">Sextas-feiras:</strong> 9h às 11h30
                                </p>
                            </div>
                        </div>

                        {/* BATISMO */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-droplet"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Batismo
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                A porta de entrada para a vida cristã. Para batizar o seu filho(a), os pais e padrinhos devem participar do Encontro de Preparação.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    Procure a Secretaria com antecedência para verificar o calendário de cursos e celebrações.
                                </p>
                            </div>
                        </div>

                        {/* MATRIMÔNIO */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-ring"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Matrimónio
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Vai casar-se? O Sacramento do Matrimónio exige preparação espiritual e organização documental rigorosa.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    Agende com no mínimo <strong>3 meses de antecedência</strong> e informe-se sobre o Curso de Noivos.
                                </p>
                            </div>
                        </div>

                        {/* CATEQUESE */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-book-bible"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Catequese
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Preparação para a Primeira Eucaristia e Crisma, formando crianças, jovens e adultos no amor de Cristo e nos ensinamentos da Igreja.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    As inscrições para novas turmas ocorrem anualmente. Fique atento aos nossos avisos!
                                </p>
                            </div>
                        </div>

                        {/* FORMAÇÃO DE COROINHAS */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-bell"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Coroinhas e Acólitos
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Preparação litúrgica e espiritual para crianças e jovens que sentem o chamamento para servir ao altar com dedicação e amor.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    Os encontros ocorrem periodicamente. Procure a coordenação após as missas ou na Secretaria.
                                </p>
                            </div>
                        </div>

                        {/* FORMAÇÃO DE SERVOS */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-people-group"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Formação de Servos
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Encontros de espiritualidade e capacitação para ministros, leitores, equipas de liturgia, grupos de oração e agentes de pastorais.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    Acompanhe a nossa Agenda Paroquial para saber as datas dos próximos encontros e retiros formativos.
                                </p>
                            </div>
                        </div>

                        {/* UNÇÃO DOS ENFERMOS */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-hand-holding-heart"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Unção dos Enfermos
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Conforto e graça para os irmãos doentes ou idosos. O padre realiza visitas domiciliárias e hospitalares para ministrar o sacramento.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    Em caso de necessidade, entre em contacto imediatamente com a Secretaria Paroquial.
                                </p>
                            </div>
                        </div>

                        {/* INTENÇÕES DE MISSA */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-scroll"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Intenções de Missa
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Reze pelos seus entes queridos falecidos, em ação de graças por aniversários ou pedidos de saúde e libertação.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    Marque as suas intenções presencialmente na Secretaria ou antes do início das missas.
                                </p>
                            </div>
                        </div>

                        {/* APOSTOLADO DA ORAÇÃO */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro transition-transform duration-300 hover:-translate-y-[5px]">
                            <div className="text-marrom-claro text-[40px] mb-[15px] flex justify-center">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                Apostolado da Oração
                            </h2>
                            <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                Rede mundial de oração do Papa e movimento de devoção ao Sagrado Coração de Jesus. Unimos as nossas preces diárias pelas intenções da Igreja.
                            </p>
                            <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center">
                                <p className="text-cinza-escuro text-[14px]">
                                    As missas e reuniões do Apostolado ocorrem tradicionalmente na <strong>1ª Sexta-feira</strong> e no <strong>1ª Domingo</strong> de cada mês.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 3. CALL TO ACTION (CHAMADA PARA A SECRETARIA) */}
                <section className="max-w-[800px] mx-auto px-[20px] mt-[60px]">
                    <div className="bg-marrom-escuro text-branco p-[40px] rounded-[10px] text-center shadow-lg">
                        <h2 className="text-[28px] font-bold mb-[15px]">Precisa de mais informações?</h2>
                        <p className="text-[18px] mb-[30px]">
                            Para agendamentos de batizados, casamentos, intenções de missa e dúvidas sobre documentos, nossa Secretaria Paroquial está pronta para atender você.
                        </p>
                        <Link 
                            to="/contatos" 
                            className="bg-mostarda text-marrom-escuro py-[12px] px-[30px] text-[18px] font-bold rounded-[5px] inline-flex items-center gap-[10px] transition-colors duration-300 hover:bg-marrom-claro hover:text-branco"
                        >
                            <i className="fa-brands fa-whatsapp text-[20px]"></i>
                            Falar com a Secretaria
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}