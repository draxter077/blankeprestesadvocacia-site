import title from "./title/main.js"
import text from "./text/main.js"
import map from "./map/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:48%;
            height:100%;
            padding:0px;
            opacity:0;
            transition:padding var(--transitionTime), opacity var(--transitionTime);
        }
        :responsive{
            width:100%;
            padding:10px !important;
        }`

    const contact = cE("div", style)
    contact.id = "contato"
    contact.appendChild(title())
    contact.appendChild(text())
    contact.appendChild(map())

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight;
            let scrollY = window.scrollY;
            if(scrollY > 1.25*viewport){
                contact.style.opacity = 1;
                contact.style.padding = "40px";
                let ls = contact.children[1].children
                for(let i = 0; i < ls.length; i++){
                    ls[i].style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
                window.removeEventListener("scroll", a)
            }
        }
    )

    return(contact)
}