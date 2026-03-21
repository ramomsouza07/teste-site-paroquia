import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../../index.css'

// Importando as imagens (verifique se os nomes e a pasta estão corretos no seu projeto)
import imgAntiga from '../../assets/matriz/matriz1.png';
import imgFlorenca from '../../assets/matriz/florenca.png';
import imgMatriz from '../../assets/matriz/foto-matriz.jpg';
import imgRoma from '../../assets/matriz/roma.jpg';
import imgSaoFidelis from '../../assets/sao-fidelis/sao_fidelis_rosto.png';
import imgMatriz2 from '../../assets/matriz/foto-matriz-2.jpg';

export default function Matriz(){
    return(
        <>
            <Header></Header>
            
            <main className="w-[90%] lg:w-[60%] text-justify mx-auto py-[60px] bg-branco-amarelado m-[20px] p-[20px] rounded-[20px]">                
                <h1 className="text-marrom-escuro text-[36px] md:text-[42px] font-bold mb-[30px] text-center leading-tight">
                    História do Santuário Diocesano de São Fidélis de Sigmaringa
                </h1>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    O Santuário Diocesano de São Fidélis de Sigmaringa não é apenas um templo religioso, mas o marco zero da fundação e do desenvolvimento de todo o município. Com mais de dois séculos de existência, a imponente edificação guarda em suas paredes de saibro a memória da união entre monges capuchinhos, povos indígenas e os primeiros colonizadores da região norte fluminense.
                </p>

                <h2 className="text-marrom-claro text-[28px] font-bold mt-[40px] mb-[20px]">
                    As Origens: A Chegada dos Capuchinhos e os Índios Coroados
                </h2>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    A história da formação de São Fidélis confunde-se diretamente com a história de sua Igreja Matriz. Tudo teve início quando os frades capuchinhos italianos Frei Ângelo Maria de Lucca e Frei Victório de Cambiasca chegaram a um local então denominado Gamboa, onde tiveram o seu primeiro contato histórico com os índios Coroados.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Após esse encontro pacífico, os capuchinhos solicitaram que os próprios indígenas escolhessem o local ideal para erguer o novo povoado. Os índios indicaram uma área um pouco abaixo da Gamboa, guiando os frades até o terreno onde, hoje, encontra-se o Colégio de São Fidélis.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Em menos de dois meses de trabalho conjunto, os frades e os índios Coroados construíram a primeira capela da região, feita de "pau fino e fraco" e coberta de palha. Com o mesmo material rústico, foram erguidas malocas para abrigar tanto os indígenas quanto os religiosos. Foi também nessa época, sob a orientação dos frades, que surgiram as primeiras lavouras cultivadas pelos Coroados, marcando o início do desenvolvimento agrícola local.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    A forte relação de amizade construída pelos frades com os índios Puris e Coroados foi o pilar para a instalação da nova Aldeia. Já no ano seguinte à sua fundação, o povoado deixou de ser chamado de Gamboa para adotar definitivamente o nome de São Fidélis. Foi em 24 de abril de 1782 que se celebrou, pela primeira vez, a festa em honra ao padroeiro, criando uma tradição que perdura há mais de dois séculos.
                </p>

                {/* FOTO DA IGREJA ANTIGA */}
                <div className="my-[40px]">
                    <img 
                        src={imgAntiga} 
                        alt="Comemoração do centenário da Igreja Matriz em 1909" 
                        className="w-full rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] object-cover" 
                    />
                    <p className="text-center text-cinza text-[14px] mt-[10px] italic">
                        Registro histórico da comemoração do centenário da Igreja Matriz em 1909.
                    </p>
                </div>

                <h2 className="text-marrom-claro text-[28px] font-bold mt-[40px] mb-[20px]">
                    A Construção do Templo Monumental (1799 – 1809)
                </h2>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    À medida que o povoado crescia e subia os degraus da civilização, iniciou-se o grandioso projeto de levantar um templo definitivo e magnífico em honra ao Promártir da Ordem dos Frades Menores Capuchinhos.
                </p>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    A monumental obra teve início no ano de 1799, orientada de perto pelos monges construtores Frei Vitório de Cambiasca, Frei Ângelo Maria de Lucca e Frei Thomaz Civitta de Castella. A construção do templo levou cerca de dez anos para ser concluída e contou com a força de trabalho vital dos indígenas e dos fazendeiros de toda a região. Quando foi finalmente aberta ao culto, em 23 de abril de 1809, a igreja contrastava com o seu entorno simples, onde haviam sido erguidas apenas 40 rústicas choupanas.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Erguer tal monumento no interior no início do século XIX foi um desafio logístico imenso. A obra era sistematicamente interrompida durante os períodos de moagem da cana-de-açúcar. Seu sustento financeiro provinha de taxas cobradas sobre as terras da aldeia de Santo Antonio de Guarulhos, em Campos dos Goytacazes, que já estavam ocupadas por brancos, mas que originalmente pertenciam aos índios. Várias famílias de Campos e fazendeiros vizinhos à Aldeia cooperaram enviando escravizados, bois, mestres de obra, oleiros, serralheiros e recursos financeiros.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    <strong className="text-marrom-escuro">Planta e Cúpula:</strong> Idealizada em formato de cruz, a planta do templo foi inspirada na Basílica de São Pedro, no Vaticano. O projeto dispõe de uma imponente cúpula central, que foi inteiramente pintada pelos capuchinhos.
                </p>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    <strong className="text-marrom-escuro">Influências Externas:</strong> O campanário, edificado de forma separada do corpo principal da igreja, possui traços que remetem à Catedral de <em>Santa Maria del Fiore</em>, em Florença. Já a fachada principal tem suas linhas inspiradas na <em>Igreja de Jesus</em> (Il Gesù), histórica construção jesuíta em Roma.
                </p>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    <strong className="text-marrom-escuro">Decoração Interna:</strong> O interior do templo reflete o barroco italianizado, característico da colônia durante o governo de D. João V. A ornamentação inclui retábulos com colunas salomônicas, baldaquinos, esculturas de notável leveza e forros com pinturas em perspectiva ilusionista.
                </p>

                <h2 className="text-marrom-claro text-[28px] font-bold mt-[40px] mb-[20px]">
                    Esplendor Arquitetônico e Influência Italiana
                </h2>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    A grandiosidade do templo logo chamou a atenção de todos, destacando-se de forma imponente na paisagem colonial, principalmente por sua vasta cúpula central.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    A arquitetura da igreja é um reflexo direto das origens de seus construtores italianos. Construída em formato de cruz, possui gosto toscano e reflete a rica transição do Renascimento para o Barroco. O estilo barroco italianizado, que predominou no Brasil colônia durante o governo de D. João V, está presente nas curvas das paredes e nas volutas dos frontispícios. No interior, os retábulos receberam ornamentos sofisticados como o baldaquino e colunas salomônicas. As esculturas, marcadas por grande leveza, dividiam a atenção com os forros do teto, pintados com técnicas de perspectiva ilusionista.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Duas grandes inspirações europeias marcam a edificação:
                </p>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    <strong className="text-marrom-escuro">O Campanário:</strong> Construído de forma curiosa, separado do corpo principal da igreja, parece ter sido inspirado na famosa catedral de "Santa Maria Del Fiore", em Florença.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    <strong className="text-marrom-escuro">A Fachada:</strong> Suas linhas refletem a arquitetura da "Igreja de Jesus" em Roma, uma clássica construção jesuíta.
                </p>

                {/* COMPARAÇÃO: FLORENÇA, SÃO FIDÉLIS E ROMA */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] my-[40px]">
                    <div className="flex flex-col items-center">
                        <img src={imgFlorenca} alt="Catedral de Florença" className="w-full h-[250px] object-cover rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]" />
                        <p className="text-center text-cinza text-[14px] mt-[10px] italic">Catedral de Florença (Campanário)</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={imgMatriz} alt="Matriz de São Fidélis" className="w-full h-[250px] object-cover rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]" />
                        <p className="text-center text-cinza text-[14px] mt-[10px] italic">Matriz de São Fidélis (Centro)</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={imgRoma} alt="Igreja de Jesus em Roma" className="w-full h-[250px] object-cover rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]" />
                        <p className="text-center text-cinza text-[14px] mt-[10px] italic">Igreja de Jesus, Roma (Fachada)</p>
                    </div>
                </div>

                <h2 className="text-marrom-claro text-[28px] font-bold mt-[40px] mb-[20px]">
                    O Teste do Tempo: Ruínas e Restaurações
                </h2>
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    As técnicas de construção da época baseavam-se nos materiais disponíveis na região. Os padres utilizaram pequenas quantidades de cal e areia misturadas ao "saibro" — uma espécie de argila local — para fabricar a pia batismal, o altar e os robustos tijolos utilizados na execução da obra.
                </p>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Contudo, com o passar das décadas, a estrutura sofreu desgastes. Em 1837, o Major Henrique Luiz de Niemeyr Bellegard, engenheiro do Império em missão pela província, visitou São Fidélis e ficou encantado com a grandiosidade de um templo localizado em um lugar tão simples. Em seu relatório, Bellegard pediu urgência e atenção do Governo Provincial, pois a "interessante Igreja" se encontrava em estado de abandono e em ruínas.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    As obras de restauração decorrentes desse apelo só foram iniciadas por volta de 1845, época em que a igreja foi elevada à categoria de Matriz, sendo concluídas em 1852. Como as obras não foram radicais, a edificação logo voltou a apresentar rachaduras.
                </p>
                
                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Foi apenas a partir de 1962 que a maior reforma estrutural já registrada foi executada, sob a orientação do Dr. Ruy Seixas. Essa intervenção garantiu a recuperação das abóbadas e incluiu a colocação de vitrais e painéis de azulejo no altar principal, em substituição à pintura de fundo. Embora essa reforma tenha descaracterizado parcialmente a fachada original, ela foi fundamental para manter a área interna quase intacta, permitindo que a Igreja resistisse como um autêntico marco da arquitetura brasileira.
                </p>

                <h2 className="text-marrom-claro text-[28px] font-bold mt-[40px] mb-[20px]">
                    O Padroeiro: São Fidélis de Sigmaringa
                </h2>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    A igreja é dedicada a São Fidélis, nascido no ano de 1577, em Sigmaringa, na Alemanha. Após formar-se em Direito pela Universidade de Friburgo, na Suíça, exerceu o ofício em Colmar, na Alsácia, onde ficou conhecido como o "advogado dos pobres", por atender gratuitamente àqueles que não podiam pagar por defesa.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Aos 34 anos, deixou a vida secular para ingressar no convento dos Capuchinhos, tornando-se frade em 1612. Enviado pelo Papa Gregório XV à Suíça para combater a heresia calvinista, acabou sendo acusado de espionagem e assassinado no dia 24 de abril de 1622. Relatos históricos afirmam que, mesmo ferido, o mártir ajoelhou-se e perdoou seus assassinos antes de morrer. Sua dedicação à fé levou à sua beatificação em 1729 e à canonização pelo Papa Bento XIV, em 26 de junho de 1746.
                </p> 

                {/* FOTO DE SÃO FIDÉLIS */}
                <div className="my-[40px] flex justify-center">
                    <img 
                        src={imgSaoFidelis} 
                        alt="Pintura de São Fidélis de Sigmaringa" 
                        className="max-w-full md:max-w-[400px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] object-cover" 
                    />
                </div>
                
                <h2 className="text-marrom-claro text-[28px] font-bold mt-[40px] mb-[20px]">
                    De Matriz a Santuário Diocesano
                </h2>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Todo esse rico percurso histórico consolidou o templo como o coração cultural e espiritual do município. Reconhecendo seu imensurável valor, o prédio foi tombado pelo Instituto Estadual do Patrimônio Cultural (Inepac) em 2002.
                </p>

                <p className="text-cinza-escuro text-[18px] mb-[20px] leading-relaxed">
                    Duas décadas depois, a sua histórica vocação para o acolhimento, a romaria e a busca por aconselhamento espiritual foi reconhecida pela Igreja Católica. No dia 24 de abril de 2022, a antiga Igreja Matriz foi oficialmente elevada à categoria de Santuário Diocesano. Hoje, celebrando mais de 215 anos de história, o Santuário permanece como um monumento vivo à fé dos mártires, ao esforço coletivo dos povos formadores do Brasil e à preservação da memória nacional.
                </p>

                {/* FOTO MATRIZ 2 */}
                <div className="mt-[40px]">
                    <img 
                        src={imgMatriz2} 
                        alt="Santuário Diocesano de São Fidélis" 
                        className="w-full rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] object-cover" 
                    />
                </div>
                {/* Iframe do Google Maps da Praça de São Fidélis */}
                <div className="mt-[45px] w-full h-[300px] rounded-[5px] overflow-hidden">
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
            </main>

            <Footer></Footer>
        </>
    )
}