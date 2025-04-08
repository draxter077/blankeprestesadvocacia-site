export default function title(){
    let style = `
        {
            text-align:right;
            width:30%;
            font-size:var(--innerTitleFontSize);
            color:var(--colorBlue);
            border-right:1px solid var(--colorBlue);
            padding:0px 20px 0px 0px;
        }
        :responsive{
            width:100%;
        }`

    const title = cE("div", style)
    title.innerHTML = "Sobre nós"
    return(title)
}