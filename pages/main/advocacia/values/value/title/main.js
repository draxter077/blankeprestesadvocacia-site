export default function title(n){
    let style = `
        {
            position: absolute;
            bottom: 0%;
            left: 0%;
            padding: 20px;
            font-size: 30px;
            color:var(--colorWhite);
            transition: left var(--transitionTime);
        }`

    const title = cE("div", style)
    title.innerHTML = n
    return(title)
}