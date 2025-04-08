import background from "./background/main.js"
import lema from "./lema/main.js"

export default function advocacia(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:100%;
            height:calc(100dvh - 95px);
            opacity:0;
            z-index:0;
            animation:showUp var(--transitionTime) linear var(--animationDelay1) 1 forwards;
            background:black;
        }
        :responsive{
            height:fit-content;
            flex-direction:column;
        }`

    const advocacia = cE("div", style)
    advocacia.id = "advocacia"
    advocacia.appendChild(background())
    advocacia.appendChild(lema())
    return(advocacia)
}