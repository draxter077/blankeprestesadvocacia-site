export default function icon(s){
    let style = `
        {
            height:calc(1.2*var(--titleFontSize));
            aspect-ratio:1;
            margin:0px 10px 0px 0px;
            padding:5px;
            border-radius:10px;
            background:var(--colorWhite);
        }`

    const icon = cE("img", style)
    icon.src = s
    return(icon)
}