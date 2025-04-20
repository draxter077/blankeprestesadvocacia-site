export default function content(t){
    let style = `
        {
            width:250px;
            aspect-ratio:3;
            color:var(--colorWhite);
            border:1px solid var(--colorBlue);
            margin:20px 10px;
        }`

    const content = cE("div", style)
    content.innerHTML = t
    return(content)
}