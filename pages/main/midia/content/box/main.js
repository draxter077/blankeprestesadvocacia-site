export default function box(url, t, a){
    let style = `
        {
            width:30%;
            height:fit-content;
            cursor:pointer;
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorWhite);
            font-size:var(--innerTextFontSize);
            transition:transform var(--transitionTime);
            margin:10px;
        }
        >span{
            font-size:12px;
            font-style:italic;
            border-top:1px solid var(--colorBlue);
            width:100%;
            padding:2px 0px 0px 0px;
        }
        :hover{
            transform:${url == undefined ? "none" : "scale(1.1)"};
        }
        :responsive{
            width:45%;
            margin:10px 0px;
        }`

    const box = cE("div", style)
    box.innerHTML = `${t}<span>${a}</span>`
    box.onclick = function a(){window.open(url, "_blank").focus()}
    return(box)
}