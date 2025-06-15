import head from "./head/main.js"
import background from "./background/main.js"
import lema from "./lema/main.js"

export default function home(){
    let style = `
        {
            position:relative;
            width:100%;
            height:100vh;
            opacity:0;
            animation:showUp var(--transitionTime) linear 1s 1 forwards;
        }
        :responsive{
            flex-direction:column;
        }`

    const home = cE("div", style)
    home.appendChild(head())
    home.appendChild(background())
    home.appendChild(lema())
    return(home)
}