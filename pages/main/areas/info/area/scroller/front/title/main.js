export default function title(t){
    let style = `
        {
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            width:100%;
            height:40%;
            font-size:20px;
            font-weight:600;
            color:var(--colorBlue);
        }
        :responsive{
            font-size:17px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}