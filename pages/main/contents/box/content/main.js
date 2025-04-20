import scroller from "./scroller/main.js"

export default function content(){
    let style = `
        {
            width:100%;
            height:100%;
            overflow-x:scroll;
        }`

    const content = cE("div", style)
    content.appendChild(scroller())
    return(content)
}