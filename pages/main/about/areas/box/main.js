export default function box(t){
    let style = `
        {
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            margin:10px;
            width:10%;
            height:25%;
            border-radius:15px;
            border:5px solid var(--colorBlue);
            background:var(--colorBlack);
            padding:20px;
            color:var(--colorWhite);
            font-size:var(--innerTextFontSize);
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        @keyframes pulse{
            0%[box-shadow:0px]
            100%[box-shadow:0px 0px 15px 0px var(--colorBlue)]
        }
        :responsive{
            width:45%;
            margin:5px;
            height:100px;
        }
        ::after{
            content:"";
            position:absolute;
            top:50%;
            right:100%;
            width:30px;
            height:1px;
            background:var(--colorBlue);
        }
        ::before{
            content:"";
            position:absolute;
            top:50%;
            left:100%;
            width:30px;
            height:1px;
            background:var(--colorBlue);
        }`

    const box = cE("div", style)
    box.innerHTML = t
    return(box)
}