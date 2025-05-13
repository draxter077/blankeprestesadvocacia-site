export default function title(){
    let style = `
        {
            font-size:32px;
            text-align:right;
            color:var(--colorBlue);
            padding:5px 10px;
            width:100%;
            margin:0px 0px 10px 0px;
            border-bottom:1px solid var(--colorBlue);
        }
        :responsive{
            font-size:25px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Sobre nós"
    title.id = "sobrenós"
    return(title)
}