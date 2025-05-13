export default function link(n){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            margin:0px 25px;
            cursor:pointer;
            position:relative;
            text-wrap:nowrap;
        }
        :responsive{
            margin:0px;
            font-size:17px;
        }
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorBlue);
            transition:width var(--transitionTime);
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