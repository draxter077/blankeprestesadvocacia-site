import background from "./background/main.js"
import title from "./title/main.js"
import text from "./text/main.js"
import onmouseDiv from "./onmouseDiv/main.js"

export default function value(n, u, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:48%;
            border-radius:15px;
            overflow:hidden;
            position:relative;
            background:var(--colorWhite);
            background-image:url("${u}");
            background-size:100%;
            box-shadow:0px 0px 5px 0px black;
        }
        :responsive{
            height: 150px;
            margin: 0px 0px 10px 0px;
        }`
    
    const value = cE("div", style)
    value.appendChild(background())
    value.appendChild(title(n))
    value.appendChild(text(t))
    value.appendChild(onmouseDiv())
    return(value)
}