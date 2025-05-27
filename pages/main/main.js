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
        }
        @keyframes showUp{0%[opacity:0]100%[opacity:1]}`

    const main = cE("div", style)
    main.appendChild(home())
    main.appendChild(about_team())
    main.appendChild(areas())
    main.appendChild(contents())
    main.appendChild(contact())
    main.appendChild(foot())
    return(main)
}