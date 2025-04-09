import title from "./title/main.js"
import text from "./text/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            padding: 80px 40px 40px 40px;
            opacity:0;
            transition:opacity var(--transitionTime), padding var(--transitionTime);
        }
        :responsive{
            flex-direction:column;
            padding:10px !important;
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
                info.style.padding = "40px";
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(info)
}