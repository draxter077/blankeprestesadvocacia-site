export default function title(t){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            width:100%;
            height:40%;
            font-size:var(--textFontSize);
            font-weight:600;
            color:var(--colorBlue);
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}