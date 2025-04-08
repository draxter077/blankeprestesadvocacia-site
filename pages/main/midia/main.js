import data from "./data/main.js"
import contact from "./contact/main.js"

export default function midia(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:100%;
            height:100dvh;
            padding:40px;
        }`

    const midia = cE("div", style)
    midia.appendChild(data())
    midia.appendChild(contact())
    return(midia)
}