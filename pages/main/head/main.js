import flyingLogo from "./flyingLogo/main.js"
import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            background:var(--colorBlack);
            padding:10px 50px;
            width:100%;
            opacity:0;
            z-index:1;
            box-shadow:0px 0px 1px 0px var(--colorWhite);
            transition:opacity var(--transitionTime);
            animation:showUp var(--transitionTime) linear var(--animationDelay0) 1 forwards;
        }
        @keyframes showUp{0%[opacity:0]100%[opacity:1]}
        :responsive{
            padding:5px;
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.id = "home"
    head.appendChild(flyingLogo())
    head.appendChild(links(["Home", "Sobre nós", "Equipe"]))
    head.appendChild(logo())
    head.appendChild(links(["Áreas", "Conteúdos", "Contato"]))
    return(head)
}