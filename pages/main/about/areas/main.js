import box from "./box/main.js"

export default function areas(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{
            height:fit-content;
        }`

    const areas = cE("div", style)
    let as = ["Família e Sucessões", "Trabalho", "Tributário", "Cível", "Empresarial", "Saúde", "Ambiental", "e mais..."]
    for(let i = 0; i < as.length; i++){areas.appendChild(box(as[i]))}

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight;
            let scrollY = window.scrollY;
            if(scrollY > 0.50*viewport){
                let cs = areas.children
                for(let i = 0; i < cs.length; i++){
                    cs[i].style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(areas)
}