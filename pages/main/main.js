import head from "./head/main.js"
import home from "./home/main.js"
import about_team from "./about_team/main.js"
import areas from "./areas/main.js"
import contents from "./contents/main.js"
import contact from "./contact/main.js"
import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorBlack);
            overflow:hidden;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(home())
    main.appendChild(about_team())
    main.appendChild(areas())
    main.appendChild(contents())
    main.appendChild(contact())
    main.appendChild(foot())
    return(main)
}