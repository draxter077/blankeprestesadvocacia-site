import title from "./title/main.js"
import info from "./info/main.js"

export default function areas(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            background:var(--colorBlue05);
            width:100%;
            padding:20px 40px 40px;
            box-shadow:0px 0px 5px 30px var(--colorBlue05);
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{padding:10px;}`

    const areas = cE("div", style)
    areas.id = "áreas"
    areas.appendChild(title())
    areas.appendChild(info())
    window.addEventListener(
        "scroll",
        function a(){
            let viewportHeight = window.innerHeight
            let elementTop = areas.offsetTop
            let elementBottom = elementTop + areas.offsetHeight
            let scrollY = window.scrollY
            if(scrollY > elementTop-viewportHeight/2){
                areas.style.opacity = 1;
            }
            else{
                areas.style.opacity = 0;
            }
        }
    )
    return(areas)
}