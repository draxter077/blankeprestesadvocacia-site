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
            margin:25dvh 0px;
            background:var(--colorBlack);
        }
        :responsive{
            flex-direction:column;
            padding:20px;
        }`
    
    const about_team = cE("div", style)
    about_team.appendChild(about())
    about_team.appendChild(team())
    window.addEventListener(
        "scroll",
        function a(){
            let viewportHeight = window.innerHeight
            let elementTop = about_team.offsetTop
            let elementBottom = elementTop + about_team.offsetHeight
            let scrollY = window.scrollY
            if(scrollY > elementTop-viewportHeight/2){
                about_team.children[0].style.opacity = 1;
                about_team.children[1].style.opacity = 1;
            }
            else{
                about_team.children[0].style.opacity = 0;
                about_team.children[1].style.opacity = 0;
            }
        }
    )
    return(about_team)
}