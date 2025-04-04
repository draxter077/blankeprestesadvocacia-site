import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:100%;
        }`

    const links = cE("div", style)
    
    let ls = ["Advocacia", "Equipe", "Casos"]
    for(let i = 0; i < ls.length;  i++){links.appendChild(link(ls[i]))}
    
    return(links)
}