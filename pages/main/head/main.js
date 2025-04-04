import flyingLogo from "./flyingLogo/main.js"
import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            background:var(--colorBlack);
            padding:10px 50px;
            width:100%;
            opacity:0;
            z-index:1;
            box-shadow:0px 0px 10px 0px var(--colorBlack);
            transition:opacity var(--transitionTime);
            animation:showUp var(--transitionTime) linear var(--animationDelay0) 1 forwards;
        }
        :responsive{
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.appendChild(flyingLogo())
    head.appendChild(logo())
    head.appendChild(links())

    window.addEventListener(
        "scroll",
        function a(){
            let nL = head.children[0]
            if(window.scrollY > 80){nL.style.opacity = "1"}
            else{nL.style.opacity = "0"}
        }
    )
    return(head)
}