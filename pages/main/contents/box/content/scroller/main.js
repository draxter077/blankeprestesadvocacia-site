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
        {title:"Assistência Farmacêutica e o Direito à Saúde: Uma Análise Jurídica sobre os Desafios da Gestão Pública no SUS", url:"https://www.jusbrasil.com.br/artigos/assistencia-farmaceutica-e-o-direito-a-saude-uma-analise-juridica-sobre-os-desafios-da-gestao-publica-no-sus/3741899884?_gl=1*1sm1j5j*_gcl_au*MTE4NDczNjU5OS4xNzQ3NTgzMzgxLjIwMjYwMzUwNzEuMTc0ODM3ODQ0OC4xNzQ4Mzc4NDQ4*_ga*MjA5Njg4MDY2OS4xNzQ3NTgzMzgy*_ga_QCSXBQ8XPZ*czE3NDgzNzg0MTMkbzkkZzEkdDE3NDgzNzg0NTckajE2JGwwJGgwJGRFNi1JQ0hSRUJkVXAxZUJ2S19CWHA2eUZyWTVOVmhoRUpB"}
    ]
    for(let i = 0; i < ats.length; i++){
        scroller.appendChild(content(ats[i].title, ats[i].url))
    }
    return(scroller)
}