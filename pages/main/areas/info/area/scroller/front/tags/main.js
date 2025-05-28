export default function tags(ts){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            width:100%;
            font-size:15px;
        }
        >span{
            height:var(--detailFontSize);
            border:1px solid var(--colorBlue);
            margin:0px 5px;
        }
        :responsive{
            font-size:12px;
        }`

    const tags = cE("div", style)
    for(let i = 0; i < ts.length; i++){
        tags.innerHTML += ts[i]
        if(i != ts.length - 1){tags.innerHTML += "<span></span>"}
    }
    return(tags)
}