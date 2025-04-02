import nameLogo from "./nameLogo/main.js"
import logo from "./logo/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            background:var(--colorBlack);
            width:100%;
            opacity:1;
            z-index:0;
            transition:opacity var(--transitionTime);
        }`

    const head = cE("div", style)
    head.appendChild(nameLogo())
    head.appendChild(logo())

    window.addEventListener(
        "scroll",
        function a(){
            let nL = head.children[0]
            if(window.scrollY > 100){nL.style.opacity = "1"}
            else{nL.style.opacity = "0"}
        }
    )
    return(head)
}