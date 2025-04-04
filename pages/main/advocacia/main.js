import lema from "./lema/main.js"
import values from "./values/main.js"

export default function advocacia(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            height:calc(100dvh - 95px);
            opacity:0;
            z-index:0;
            animation:showUp var(--transitionTime) linear var(--animationDelay1) 1 forwards;
        }
        :responsive{
            flex-direction:column;
        }`

    const advocacia = cE("div", style)
    advocacia.id = "advocacia"
    advocacia.appendChild(lema())
    advocacia.appendChild(values())
    return(advocacia)
}