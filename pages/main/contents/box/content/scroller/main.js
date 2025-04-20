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
    for(let i = 0; i < 15; i++){scroller.appendChild(content("Artigo"))}
    return(scroller)
}