import box from "./box/main.js"

export default function contents(){
    let style = `
        {
            display:flex;
            justify-content:center;
            width:100%;
            margin:0px 0px 40px 0px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }`

    const contents = cE("div", style)
    contents.id = "conteúdos"
    contents.appendChild(box())
    window.addEventListener(
        "scroll",
        function a(){
            let viewportHeight = window.innerHeight
            let viewportWidth = window.innerWidth
            let scrollY = window.scrollY
            if((viewportWidth >= 1080 && scrollY > 1.5*viewportHeight) || (viewportWidth < 1080 && scrollY > 2.5*viewportHeight)){
                contents.style.opacity = 1;
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(contents)
}