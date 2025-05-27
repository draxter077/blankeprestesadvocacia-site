export default function link(n){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            margin:0px 25px;
            padding:5px 10px;
            border-radius:10px;
            cursor:pointer;
            text-wrap:nowrap;
            transition:background 0.5s;
        }
        :responsive{
            margin:0px;
            font-size:17px;
        }
        :hover{
            background:var(--colorBlue);
        }`

    const link = cE("div", style)
    link.innerHTML = n
    link.addEventListener(
        "click",
        function a(){document.getElementById(n.toLowerCase().replace(" ", "")).scrollIntoView({behavior:"smooth"})}
    )
    return(link)
}