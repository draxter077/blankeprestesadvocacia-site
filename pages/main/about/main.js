import title from "./title/main.js"
import info from "./info/main.js"

export default function about(){
    let style = `
        {
            width:100%;
            height:100dvh;
        }`

    const about = cE("div", style)
    about.appendChild(title())
    about.appendChild(info())
    return(about)
}