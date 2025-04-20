export default function text(t){
    let style = `
        {
            font-size:var(--textFontSize);
            color:var(--colorWhite);
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}