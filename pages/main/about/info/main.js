import title from "./title/main.js"
import text from "./text/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            padding:40px;
        }
        :responsive{
            flex-direction:column;
        }`
    
    const info = cE("div", style)
    info.appendChild(title())
    info.appendChild(text())
    return(info)
}