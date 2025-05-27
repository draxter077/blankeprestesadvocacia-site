import flyingLogo from "./flyingLogo/main.js"
import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            opacity:0;
            transition:opacity var(--transitionTime);
            animation:showUp var(--transitionTime) linear 0s 1 forwards;
        }
        :responsive{
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.id = "home"
    head.appendChild(flyingLogo())
    head.appendChild(links(["Home", "Sobre nós"]))
    head.appendChild(logo())
    head.appendChild(links(["Conteúdos", "Contato"]))
    return(head)
}