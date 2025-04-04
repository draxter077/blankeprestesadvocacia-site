import logo from "./logo/main.js"
import flyingLinks from "./flyingLinks/main.js"

export default function flyingLogo(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:70px;
            position:fixed;
            top:20px;
            opacity:0;
            z-index:-1;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            display:none;
        }`

    const flyingLogo = cE("div", style)
    flyingLogo.appendChild(logo())
    flyingLogo.appendChild(flyingLinks())
    flyingLogo.addEventListener(
        "mouseover",
        function a(){flyingLogo.children[1].style.maxWidth = "100%"}
    )
    flyingLogo.addEventListener(
        "mouseout",
        function a(){flyingLogo.children[1].style.maxWidth = "0px"}
    )
    return(flyingLogo)
}