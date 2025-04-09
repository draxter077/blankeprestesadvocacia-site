import box from "./box/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:48%;
            height:100%;
            padding:0px;
            opacity:0;
            transition:padding var(--transitionTime), opacity var(--transitionTime);
        }
        :responsive{
            width:100%;
            padding:10px !important;
        }`

    const content = cE("div", style)
    content.id = "conteúdos"
    let cs = [["./imgs/article.webp", "https://www.researchgate.net/publication/387824335_LOGISTICA_URBANA_SISTEMA_SOCIOTECNICO_DE_GOVERNANCA_MULTINIVEL_PARA_LOGISTICA_URBANA_EM_CURITIBA?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"],
        ["./imgs/photo.webp", undefined],
        ["./imgs/article.webp", "https://www.researchgate.net/publication/387824335_LOGISTICA_URBANA_SISTEMA_SOCIOTECNICO_DE_GOVERNANCA_MULTINIVEL_PARA_LOGISTICA_URBANA_EM_CURITIBA?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"],
        ["./imgs/photo.webp", undefined],
        ["./imgs/article.webp", "https://www.researchgate.net/publication/387824335_LOGISTICA_URBANA_SISTEMA_SOCIOTECNICO_DE_GOVERNANCA_MULTINIVEL_PARA_LOGISTICA_URBANA_EM_CURITIBA?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"],
        ["./imgs/photo.webp", undefined],
        ["./imgs/article.webp", "https://www.researchgate.net/publication/387824335_LOGISTICA_URBANA_SISTEMA_SOCIOTECNICO_DE_GOVERNANCA_MULTINIVEL_PARA_LOGISTICA_URBANA_EM_CURITIBA?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"],
        ["./imgs/photo.webp", undefined],
        ["./imgs/article.webp", "https://www.researchgate.net/publication/387824335_LOGISTICA_URBANA_SISTEMA_SOCIOTECNICO_DE_GOVERNANCA_MULTINIVEL_PARA_LOGISTICA_URBANA_EM_CURITIBA?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"]
    ]
    for(let i = 0; i < cs.length; i++){
        content.appendChild(box(cs[i][0], cs[i][1]))
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