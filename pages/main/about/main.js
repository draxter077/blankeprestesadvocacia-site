import info from "./info/main.js"
import areas from "./areas/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:100%;
            height:100dvh;
        }
        :responsive{
            height:fit-content;
        }`

    const about = cE("div", style)
    about.id = "sobre nós"
    about.appendChild(info())
    about.appendChild(areas())
    return(about)
}