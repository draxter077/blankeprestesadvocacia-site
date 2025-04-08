import text from "./text/main.js"
import areas from "./areas/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:100%;
            height:calc(100% - 60px);
            padding:40px;
        }`

    const info = cE("div", style)
    info.appendChild(text())
    info.appendChild(areas())
    return(info)
}