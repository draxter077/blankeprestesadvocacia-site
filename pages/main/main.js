import head from "./head/main.js"
import advocacia from "./advocacia/main.js"
import equipe from "./equipe/main.js"
import casos from "./casos/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            background:linear-gradient(30deg, var(--colorWhite) 0%, var(--colorBlue) 80%, var(--colorBlack) 95%);
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(advocacia())
    main.appendChild(casos())
    main.appendChild(equipe())
    return(main)
}