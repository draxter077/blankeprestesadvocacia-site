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
            background:linear-gradient(180deg, var(--colorBlack) 80%, var(--colorBlue) 95%, var(--colorWhite));
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