import background from "./background/main.js"
import lema from "./lema/main.js"

export default function home(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:100%;
            height:calc(100dvh - 95px);
            opacity:0;
            z-index:0;
            animation:showUp var(--transitionTime) linear 1s 1 forwards;
            background:black;
        }
        :responsive{
            height:fit-content;
            flex-direction:column;
        }`

    const home = cE("div", style)
    home.appendChild(background())
    home.appendChild(lema())
    return(home)
}