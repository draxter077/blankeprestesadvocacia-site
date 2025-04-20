import title from "./title/main.js"
import info from "./info/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            width:30%;
        }
        :responsive{width:100%;margin:0px 0px 20px 0px;}`

    const about = cE("div", style)
    about.appendChild(title())
    about.appendChild(info())
    return(about)
}