import box from "./box/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            flex-wrap:wrap;
            width:100%;
            margin:50px 0px 0px 0px;
            height:90%;
            max-height:100%;
            opacity:0;
            transition:padding var(--transitionTime), opacity var(--transitionTime);
        }
        :responsive{
            height:fit-content;
            padding:10px !important;
            margin:0px;
        }`

    const content = cE("div", style)
    content.id = "conteúdos"
    let cs = [["", "Estudo dos Direitos Sociais aplicados ao Trabalho", "Sergio Prestes"],
        ["", "Estudo dos Direitos Sociais aplicados", "Sergio Prestes"],
        ["", "Estudo dos Direitos do Trabalho", "Sergio Prestes"],
        ["", "Estudo dos Direitos Sociais", "Sergio Prestes"],
        ["", "Estudo do Trabalho", "Sergio Prestes"],
        ["", "Direitos Sociais aplicados ao Trabalho", "Sergio Prestes"],
        ["", "Trabalho", "Sergio Prestes"]
    ]
    for(let i = 0; i < cs.length; i++){
        content.appendChild(box(cs[i][0], cs[i][1], cs[i][2]))
    }

    window.addEventListener(
        "scroll",
        function a(){
            let viewport = window.innerHeight;
            let scrollY = window.scrollY;
            if(scrollY > 1.25*viewport){
                content.style.opacity = 1;
                content.style.padding = "40px";
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(content)
}