import icon from "./icon/main.js"
import text from "./text/main.js"

export default function icon_text(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }
        :responsive{
            margin:10px 0px 0px 0px;
        }`

    const icon_text = cE("div", style)
    icon_text.appendChild(icon(d.icon))
    icon_text.appendChild(text(d.text))
    return(icon_text)
}