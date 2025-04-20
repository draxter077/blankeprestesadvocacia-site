import content from "./content/main.js"

export default function box(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:nowrap;
            width:70%;
            background:var(--colorWhite);
            border:1px solid var(--colorWhite);
            border-radius:10px;
            padding:20px;
            overflow-x:scroll;
        }
        :responsive{width:95%}`

    const box = cE("div", style)
    let ns = ["Artigo1", "Artigo2", "Artigo3", "Artigo1", "Artigo2", "Artigo3", "Artigo1", "Artigo2", "Artigo3", "Artigo1", "Artigo2", "Artigo3", "Artigo1", "Artigo2", "Artigo3"]
    for(let i = 0; i < ns.length; i++){box.appendChild(content(ns[i]))}
    return(box)
}