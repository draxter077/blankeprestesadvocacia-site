import link from "./link/main.js"

export default function links(ls){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:100%;
        }
        :responsive{
            display:none;
            justify-content:space-between;
        }`

    const links = cE("div", style)
    
    for(let i = 0; i < ls.length;  i++){links.appendChild(link(ls[i]))}
    
    return(links)
}