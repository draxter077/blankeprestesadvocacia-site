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
            margin:40px 0px;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            flex-direction:column;
            padding:10px;
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
            if(scrollY > elementTop-viewportHeight/2 && scrollY < elementBottom){
                about_team.style.opacity = 1;
            }
            else{
                about_team.style.opacity = 0;
            }
        }
    )
    return(about_team)
}