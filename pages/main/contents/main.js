import box from "./box/main.js"

export default function contents(){
    let style = `
        {
            display:flex;
            justify-content:center;
            width:100%;
            margin:10vh 0px;
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
            let elementTop = contents.offsetTop
            let elementBottom = elementTop + contents.offsetHeight
            let scrollY = window.scrollY
            if(scrollY > elementTop-viewportHeight/2){
                contents.style.opacity = 1;
            }
            else{
                contents.style.opacity = 0;
            }
        }
    )
    return(contents)
}