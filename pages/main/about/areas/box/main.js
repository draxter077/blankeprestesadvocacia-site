export default function box(t){
    let style = `
        {
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:0px 10px;
            border-radius:15px;
            border:5px solid var(--colorBlue);
            background:var(--colorBlack);
            padding:20px;
            color:var(--colorWhite);
            font-size:var(--innerTextFontSize);
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            width:40%;
            margin:5px;
        }
        ::after{
            content:"";
            position:absolute;
            top:50%;
            right:100%;
            width:20px;
            height:1px;
            background:var(--colorBlue);
        }
        ::before{
            content:"";
            position:absolute;
            top:50%;
            left:100%;
            width:20px;
            height:1px;
            background:var(--colorBlue);
        }`

    const box = cE("div", style)
    box.innerHTML = t
    return(box)
}