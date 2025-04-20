import title from "./title/main.js"
import info from "./info/main.js"

export default function areas(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            background:var(--colorBlue);
            width:100%;
            padding:20px 40px 40px;
            box-shadow:0px 0px 5px 30px var(--colorBlue);
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
            let viewportWidth = window.innerWidth
            let scrollY = window.scrollY
            if((viewportWidth >= 1080 && scrollY > 1*viewportHeight) || (viewportWidth < 1080 && scrollY > 1.25*viewportHeight)){
                areas.style.opacity = 1;
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(areas)
}