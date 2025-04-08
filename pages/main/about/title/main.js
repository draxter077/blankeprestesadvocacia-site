export default function title(){
    let style = `
        {
            width:100%;
            background:var(--colorBlack);
            padding:20px 40px;
            color:var(--colorWhite);
            font-size:20px;
            text-align:center;
        }`

    const title = cE("div", style)
    title.innerHTML = "Sobre nós"
    return(title)
}