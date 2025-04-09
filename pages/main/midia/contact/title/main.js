export default function title(){
    let style = `
        {
            width:100%;
            font-size:var(--innerTitleFontSize);
            color:var(--colorWhite);
            padding:10px 15px;
            text-align:right;
            border-bottom:1px solid var(--colorWhite);
        }`

    const title = cE("div", style)
    title.innerHTML = "Contato"
    return(title)
}