import links from "../../links/main.js"

export default function flyingLinks(){
    let style = `
        {
            height:100%;
            width:fit-content;
            max-width:0px;
            overflow:hidden;
            background:var(--colorBlack);
            box-shadow:0px 0px 5px 5px var(--colorBlack);
            transition:max-width var(--transitionTime);
        }`

    const flyingLinks = cE("div", style)
    flyingLinks.appendChild(links(["Home", "Sobre nós", "Conteúdos", "Contato"]))
    return(flyingLinks)
}