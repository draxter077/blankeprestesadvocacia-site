export default function link(n){
    let style = `
        {
            position:relative;
            font-size:20px;
            color:var(--colorWhite);
            margin:0px 25px;
            padding:2px 5px;
            cursor:pointer;
            text-wrap:nowrap;
        }
        :responsive{
            margin:0px;
            font-size:15px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            content:"";
            width:0%;
            height:2px;
            background:var(--colorBlue);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }`

    const link = cE("div", style)
    link.innerHTML = n
    link.addEventListener(
        "click",
        function a(){document.getElementById(n.toLowerCase().replace(" ", "")).scrollIntoView({behavior:"smooth"})}
    )
    return(link)
}