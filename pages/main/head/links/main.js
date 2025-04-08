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
            justify-content:space-between;
            order:2;
            width:100%;
            padding:5px 10px;    
        }`

    const links = cE("div", style)
    
    for(let i = 0; i < ls.length;  i++){links.appendChild(link(ls[i]))}
    
    return(links)
}