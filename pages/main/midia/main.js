import content from "./content/main.js"
import contact from "./contact/main.js"

export default function midia(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:100%;
            height:100dvh;
        }
        :responsive{
            flex-direction:column;
            height:fit-content;   
        }`

    const midia = cE("div", style)
    midia.appendChild(content())
    midia.appendChild(contact())
    return(midia)
}