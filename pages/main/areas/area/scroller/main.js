import front from "./front/main.js"
import after from "./after/main.js"

export default function scroller(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:200%;
            height:100%;
            transition:transform var(--transitionTime);
        }`
    
    const scroller = cE("div", style)
    scroller.appendChild(front(d.title, d.tags))
    scroller.appendChild(after(d.info))
    return(scroller)
}