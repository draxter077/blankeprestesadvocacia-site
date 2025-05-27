import logo from "./logo/main.js"
import flyingLinks from "./flyingLinks/main.js"

export default function flyingLogo(){
    let style = `
        {
            position:fixed;
            top:20px;
            left:20px;
            display:flex;
            flex-direction:row;
            align-items:center;
            height:80px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            height:40px;
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
    window.addEventListener(
        "scroll",
        function a(){
            if(window.scrollY > window.innerHeight/2){flyingLogo.style.opacity = "1"}
            else{flyingLogo.style.opacity = "0"}
        }
    )
    return(flyingLogo)
}