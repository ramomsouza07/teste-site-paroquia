import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Cards";
import ChurchCard from "../components/ChurchCards";

export default function Home(){
    return(
        <>
            <Header/>
        
        <main className="bg-branco-amarelado min-h-screen">
            
            {/* SEÇÃO HERO */}
            <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro text-branco text-center py-[100px] px-[20px]">
                <div className="max-w-[1200px] mx-auto">
                    
                    <h1 className="text-[56px] mb-[20px] text-branco [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] leading-tight">
                        Igreja Matriz de São Fidélis de Sigmaringa
                    </h1>
                    
                    <p className="text-[20px] mb-[40px]">
                        Um marco de fé, história e devoção às margens do Rio Paraíba do Sul.
                    </p>
                    
                    {/* Botão Principal */}
                    <a 
                        href="#comunidades" 
                        className="bg-mostarda text-marrom-escuro py-[12px] px-[30px] text-[18px] font-bold rounded-[5px] inline-block transition-colors duration-300 hover:bg-marrom-claro hover:text-branco"
                    >
                        Conheça Nossas Comunidades
                    </a>

                </div>
            </section>            

            <div className="flex gap-20 justify-center pt-[20px]">
                <Card title="Horários de Missas">
                    <p>Domingo: 8h, 10h e 19h</p>
                    <p>Segunda a Sexta: 6h</p>
                    <p>Sábado: 17h e 19h</p>
                </Card>
                <Card title="Atendimento de Confissões">
                    <p>Quinta: 14h até 16h</p>
                    <p>Sexta: 9h até 11h30</p>
                </Card>
            </div>

            {/* SEÇÃO NOSSA HISTÓRIA E DEVOÇÃO */}
            <section className="bg-branco py-[60px] px-[20px] text-center max-w-[900px] my-[40px] mx-auto rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                
                <div className="flex flex-col items-center">
                    
                    {/* Título */}
                    <h2 className="text-marrom-escuro text-[32px] mb-[20px]">
                        Nossa História e Devoção
                    </h2>
                    
                    {/* Parágrafos de História */}
                    <p className="text-cinza-escuro text-[18px] mb-[15px]">
                        A Igreja Matriz de São Fidélis de Sigmaringa teve sua construção iniciada em 1799 e foi concluída em 1809 pelos frades capuchinhos.
                    </p>
                    <p className="text-cinza-escuro text-[18px] mb-[15px]">
                        Com linhas arquitetônicas de reflexo italiano e gosto toscano em sua construção em cruz, o monumental templo chama a atenção pela grandiosidade de sua cúpula e carrega mais de dois séculos de fé em nossa cidade.
                    </p>
                    
                    {/* Detalhes da Paróquia (com linha divisória em cima) */}
                    <div className="mt-[30px] pt-[20px] border-t border-marrom-claro/30 w-full max-w-[500px] font-medium text-marrom-escuro">
                        <p className="text-[18px] mb-[10px]">
                            <span className="text-marrom-claro mr-2">✝</span> 
                            Diocese de Campos dos Goytacazes
                        </p>
                        <p className="text-[18px] mb-[10px]">
                            Pároco: Pe. Gilberto Alvim
                        </p>
                        <p className="text-[18px] mb-[10px]">
                            Contato: <a 
                                href="https://api.whatsapp.com/send?phone=552227581146" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-marrom-claro font-bold transition-colors duration-300 hover:text-mostarda"
                            >
                                (22) 2758-1146
                            </a>
                        </p>
                    </div>

                </div>
                
            </section>

            <section id="comunidades" className="py-[60px] px-[20px] max-w-[1200px] mx-auto text-center">
                
                <h2 className="text-marrom-escuro text-[32px] mb-[40px]">
                    Nossas Igrejas
                </h2>
                
                <div className="flex justify-center gap-[30px] flex-wrap">
                    
                    <ChurchCard 
                        imageText="Foto da Matriz"
                        title="Matriz São Fidélis"
                        description="Santuário histórico e coração de nossa paróquia."
                        linkUrl="/matriz"
                    />

                    <ChurchCard 
                        imageText="Foto da Igreja"
                        title="Capela São Sebastião"
                        description="Comunidade localizada no bairro Ipuca."
                        linkUrl="pages/igreja-sebastiao.html"
                    />

                    <ChurchCard 
                        imageText="Foto da Igreja"
                        title="Capela São Vicente"
                        description="Breve descrição da comunidade."
                        linkUrl="pages/igreja-vicente.html"
                    />

                </div>
            </section>

            <section id="dizimo" className="py-[60px] px-[20px] text-center">
                
                <div className="max-w-[800px] mx-auto bg-white p-[40px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                    
                    <h2 className="text-marrom-claro text-[32px] mb-[20px]">Devolução do Dízimo</h2>
                    
                    <p className="text-cinza-escuro text-[18px]">
                        Sua contribuição ajuda a manter nossa igreja e nossos projetos sociais vivos. Seja um dizimista fiel!
                    </p>
                    
                    <div className="mt-[30px] bg-branco p-[20px] rounded-[5px] border-l-[5px] border-mostarda">
                        <p className="text-[18px] text-cinza-escuro mb-[10px]">
                            <strong className="text-marrom-escuro">PIX (CNPJ):</strong> 00.000.000/0000-00
                        </p>
                        <p className="text-[18px] text-cinza-escuro">
                            <strong className="text-marrom-escuro">Banco:</strong> Nome do Banco <span className="text-marrom-claro mx-[5px]">|</span> 
                            <strong className="text-marrom-escuro"> Ag:</strong> 0000 <span className="text-marrom-claro mx-[5px]">|</span> 
                            <strong className="text-marrom-escuro"> Cc:</strong> 00000-0
                        </p>
                    </div>
                    
                </div>
                
            </section>
        </main>

        <Footer></Footer>
        </>
    )
}