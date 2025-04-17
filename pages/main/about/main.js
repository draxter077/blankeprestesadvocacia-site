import info from "./info/main.js"
import areas from "./areas/main.js"
import photos from "./photos/main.js"
import contact from "./contact/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100dvh;
            padding:40px;
        }
        :responsive{
            height:fit-content;
            padding:10px;
        }`

    const about = cE("div", style)
    about.id = "sobre nós"
    about.appendChild(info())
    about.appendChild(areas())
    about.appendChild(photos())
    about.appendChild(contact())
    return(about)
}