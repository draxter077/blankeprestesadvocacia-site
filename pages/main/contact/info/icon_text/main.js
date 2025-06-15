import icon from "./icon/main.js"
import text from "./text/main.js"

export default function icon_text(t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const icon_text = cE("div", style)
    icon_text.appendChild(icon())
    icon_text.appendChild(text(t))
    return(icon_text)
}