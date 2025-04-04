export default function link(n){
    let style = `
        {
            font-size: 20px;
            color:var(--colorWhite);
            margin:0px 25px;
            cursor:pointer;
            position:relative;
        }
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorWhite);
            transition:width var(--transitionTime);
        }
        :hover::after{
            width:100%;
        }`

    const link = cE("div", style)
    link.innerHTML = n
    link.addEventListener(
        "click",
        function a(){document.getElementById(n.toLowerCase()).scrollIntoView({behavior:"smooth"})}
    )
    return(link)
}