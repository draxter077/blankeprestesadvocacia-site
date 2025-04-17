import title from "./title/main.js"
import text from "./text/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            padding: 40px 0px 0px 0px;
            opacity:0;
            transition:opacity var(--transitionTime), padding var(--transitionTime);
        }
        :responsive{
            flex-direction:column;
            margin:0px 0px 5px 0px;
        }`
    
    const info = cE("div", style)
    info.appendChild(title())
    info.appendChild(text())

    window.addEventListener(
        "scroll",
        function a(){
            let viewport = window.innerHeight;
            let scrollY = window.scrollY;
            if(scrollY > 0.25*viewport){
                info.style.opacity = 1;
                info.style.padding = "0px";
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(info)
}