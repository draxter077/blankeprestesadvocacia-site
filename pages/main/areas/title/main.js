export default function title(){
    let style = `
        {
            width:fit-content;
            font-size:var(--titleFontSize);
            color:var(--colorWhite);
            border-right:1px solid var(--colorBlack);
            border-left:1px solid var(--colorBlack);
            padding:5px 10px;
            margin:0px 0px 20px 0px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Algumas de nossas especialidades"
    return(title)
}