export default function icon(){
    let style = `
        {
            font-size:32px;
            color:var(--colorBlue);
            margin:0px 10px;
        }`

    const icon = cE("div", style)
    icon.innerHTML = "•"
    return(icon)
}