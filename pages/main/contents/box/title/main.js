export default function title(){
    let style = `
        {
            font-size:32px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            padding:10px 20px;
            text-align:center;
        }
        :responsive{
            font-size:25px;
        }`
    
    const title = cE("div", style)
    title.innerHTML = "Conteúdos"
    return(title)
}