import about from "./about/main.js"
import team from "./team/main.js"

export default function about_team(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            padding:40px;
            background:linear-gradient(var(--colorBlack) 95%, var(--colorBlue) 97%);
        }
        :responsive{flex-direction:column; padding:10px;}`
    
    const about_team = cE("div", style)
    about_team.appendChild(about())
    about_team.appendChild(team())
    return(about_team)
}