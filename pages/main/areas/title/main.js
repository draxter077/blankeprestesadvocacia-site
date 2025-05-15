export default function title(){
    let style = `
        {
            width:fit-content;
            font-size:32px;
            color:var(--colorWhite);
            border-right:1px solid var(--colorWhite);
            border-left:1px solid var(--colorWhite);
            padding:0px 20px 5px;
            margin:0px 0px 20px 0px;
        }
        :responsive{
            font-size:25px;
            text-align:center;
        }`

    const title = cE("div", style)
    title.innerHTML = "Áreas de atuação"
    return(title)
}