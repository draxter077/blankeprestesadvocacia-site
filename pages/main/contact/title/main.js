export default function title(){
    let style = `
        {
            font-size:var(--titleFontSize);
            color:var(--colorBlue);
            padding:5px 10px;
            border-bottom:1px solid var(--colorBlue);
            margin:0px 0px 20px 0px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Contato"
    return(title)
}