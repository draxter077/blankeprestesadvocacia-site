import title from "./title/main.js"
import info from "./info/main.js"
import links from "./links/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:80%;
        }
        :responsive{width:95%}`

    const contact = cE("div", style)
    contact.id = "contato"
    contact.appendChild(title())
    contact.appendChild(info())
    contact.appendChild(links())
    return(contact)
}