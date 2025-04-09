import head from "./head/main.js"
import advocacia from "./advocacia/main.js"
import about from "./about/main.js"
import midia from "./midia/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            background:var(--colorBlack);
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(advocacia())
    main.appendChild(about())
    main.appendChild(midia())
    return(main)
}