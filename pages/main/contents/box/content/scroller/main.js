import content from "./content/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            height:fit-content;
            width:fit-content;
        }`

    const scroller = cE("div", style)
    let ats = [
        {
            title:"Assistência Farmacêutica e o Direito à Saúde: Uma Análise Jurídica sobre os Desafios da Gestão Pública no SUS", 
            url:"https://www.jusbrasil.com.br/artigos/assistencia-farmaceutica-e-o-direito-a-saude-uma-analise-juridica-sobre-os-desafios-da-gestao-publica-no-sus/3741899884"
        },
        {
            title:"Inteligência Artificial, sustentabilidade e governança",
            url:"https://www.jusbrasil.com.br/artigos/inteligencia-artificial-sustentabilidade-e-governanca/3980779171"
        }
    ]
    for(let i = 0; i < ats.length; i++){
        scroller.appendChild(content(ats[i].title, ats[i].url))
    }
    return(scroller)
}