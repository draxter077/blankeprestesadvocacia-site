import links from "../../links/main.js"

export default function flyingLinks(){
    let style = `
        {
            height:100%;
            width:fit-content;
            max-width:0px;
            background:var(--colorBlack);
            overflow:hidden;
            transition:max-width var(--transitionTime);
        }`

    const flyingLinks = cE("div", style)
    flyingLinks.appendChild(links(["Home", "Sobre nós", "Equipe", "Áreas", "Conteúdos", "Contato"]))
    return(flyingLinks)
}