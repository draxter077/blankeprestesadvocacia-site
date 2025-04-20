export default function title(){
    let style = `
        {
            font-size:var(--titleFontSize);
            color:var(--colorBlack);
            background:var(--colorWhite);
            padding:10px 20px;
            text-align:center;
        }`
    
    const title = cE("div", style)
    title.innerHTML = "Conteúdos"
    return(title)
}