import title from "./title/main.js"
import info from "./info/main.js"
import links from "./links/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:80%;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{width:95%}`

    const contact = cE("div", style)
    contact.id = "contato"
    contact.appendChild(title())
    contact.appendChild(info())
    contact.appendChild(links())
    window.addEventListener(
        "scroll",
        function a(){
            let viewportHeight = window.innerHeight
            let viewportWidth = window.innerWidth
            let scrollY = window.scrollY
            if((viewportWidth >= 1080 && scrollY > 2*viewportHeight) || (viewportWidth < 1080 && scrollY > 2.5*viewportHeight)){
                contact.style.opacity = 1;
            }
            else{
                contact.style.opacity = 0
            }
        }
    )
    return(contact)
}