import area from "./area/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{justify-content:center;}`

    const info = cE("div", style)
    let as = [{title:"Empresarial", tags:["Consultoria", "Estruturação", "Governança"], info:"Solucionamos desafios jurídicos com precisão e estratégia para empresas, oferecendo suporte especializado em direito empresarial, internacional e tributário"},
        {title:"Tributário", tags:["Planejamento", "Consultoria", "Gestão"], info:"Assessoria especializada em planejamento e consultoria tributária, com foco na segurança jurídica e na eficiência fiscal das atividades empresariais"},
        {title:"Saúde", tags:["Acesso a saúde", "Saúde Pública", "Saúde Privada"], info:"Atuação jurídica especializada na defesa dos direitos de pacientes, profissionais e instituições de saúde, com ênfase em acesso a tratamentos, responsabilidade médica e relações com o sistema público e suplementar"},
        {title:"Life Sciences", tags:["Farmacoeconomia", "Regulação", "Indústria"], info:"Possuímos ampla experiência em temas regulatórios e atuação com Conitec, ANS, Datasus, Anvisa, CMED, avaliação de tecnologias em saúde, impacto orçamentário, custo-efetividade incremental, análises de métodos de produção e elaboração de pareceres e dossiês de incorporação"},
        {title:"Cível", tags:["Contencioso", "Conflitos", "Disputas Contratuais", "Obrigações"], info:"Representação qualificada em disputas judiciais e extrajudiciais, com foco na resolução estratégica de conflitos civis, contratuais e obrigacionais"},
        {title:"Trabalhista", tags:["Consultoria", "Conflitos", "Passivos"], info:"Atuação em questões trabalhistas, com foco na prevenção de passivos, conformidade legal e defesa de interesses em conflitos individuais e coletivos"},
        {title:"Societário, M&A e Mercado de Capitais", tags:["Fusões & Aquisições", "Reestruturação"], info:"Atuação estratégica em estruturação societária, governança corporativa, fusões e aquisições (M&amp;A) e operações no mercado de capitais, apoiando negócios em todas as fases de crescimento com segurança jurídica e eficiência"},
        {title:"Compliance", tags:["Conformidade", "Gestão de Riscos", "Política Interna", "Integridade", "Anticorrupção"], info:"Assessoria especializada em conformidade regulatória, prevenção de riscos e implementação de políticas de compliance, garantindo a integridade e a transparência nas operações empresariais"}
        ]
    for(let i = 0; i < as.length; i++){info.appendChild(area(as[i]))}
    return(info)
}