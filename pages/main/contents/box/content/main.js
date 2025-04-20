export default function content(){
    let style = `
        {
            width:0px;
            height:100px;
            background:var(--colorBlack);
            font-size:var(--textFontSize);
            color:var(--colorWhite);
            margin:0px 10px;
            padding:10px;
        }`

    const content = cE("div", style)
    return(content)
}