import box from "./box/main.js"

export default function areas(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            height:calc(100dvh - 100px);
            padding:40px 0px 0px 0px;
            opacity:0;
            transition:opacity var(--transitionTime), padding var(--transitionTime);
        }
        :responsive{
            height:fit-content;
        }`

    const areas = cE("div", style)
    let as = ["Família e Sucessões", "Trabalho", "Tributário", "Cível",
        "Digital", "Empresarial", "Saúde", "Previdenciário", "Penal",
        "Criminal", "Político", "Internacional", "Família e Sucessões", 
        "Trabalho", "Tributário", "Cível", "Digital", "Empresarial", 
        "Saúde", "Previdenciário", "Penal", "Criminal", "Político", "e mais..."]
    for(let i = 0; i < as.length; i++){areas.appendChild(box(as[i]))}

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight;
            let scrollY = window.scrollY;
            if(scrollY > 0.75*viewport){
                areas.style.opacity = 1;
                areas.style.padding = "0px";
                let cs = areas.children
                for(let i = 0; i < cs.length; i++){
                    cs[i].style.opacity = 1
                    cs[i].style.animation = "pulse 1.5s linear var(--animationDelay2) infinite alternate"
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(areas)
}