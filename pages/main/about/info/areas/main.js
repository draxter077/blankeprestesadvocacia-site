import box from "./box/main.js"

export default function areas(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
        }`

    const areas = cE("div", style)
    let as = ["Tributário e planejamento fiscal", "Trabalho", "Cível", "Família e Sucessões", "..."]
    for(let i = 0; i < as.length; i++){
        areas.appendChild(box(as[i]))
    }
    return(areas)
}