export default function text(t){
    let style = `
        {
            width:100%;
            text-align: center;
            opacity: 0;
            padding: 20px;
            z-index:0;
            color:var(--colorWhite);
            transition: opacity var(--transitionTime);
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}