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
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"},
        {title:"Modelos de Ouvidorias Públicas no Brasil", url:"https://repositorio.ipea.gov.br/bitstream/11058/9709/1/Modelos%20de%20ouvidorias.pdf"}
    ]
    for(let i = 0; i < ats.length; i++){
        scroller.appendChild(content(ats[i].title, ats[i].url))
    }
    return(scroller)
}