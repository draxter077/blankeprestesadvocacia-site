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
        }
        :responsive{
            height:fit-content;
        }`

    const areas = cE("div", style)
    let as = ["Família e Sucessões", "Trabalho", "Tributário", "Cível",
        "Digital", "Empresarial", "Saúde", "Previdenciário", "Penal",
        "Criminal", "Político", "Internacional", "Família e Sucessões", 
        "Trabalho", "Tributário", "Cível", "Digital", "Empresarial", 
        "Saúde", "Previdenciário", "Penal", "Criminal", "Político", "Internacional"
    ]
    for(let i = 0; i < as.length; i++){areas.appendChild(box(as[i]))}
    return(areas)
}