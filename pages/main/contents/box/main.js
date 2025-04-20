import title from "./title/main.js"
import content from "./content/main.js"

export default function box(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:60%;
        }
        :responsive{width:95%;padding:10px;}`

    const box = cE("div", style)
    box.appendChild(title())
    box.appendChild(content())
    return(box)
}