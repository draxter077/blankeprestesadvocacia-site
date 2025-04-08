export default function box(t){
    let style = `
        {
            width:18%;
            height:200px;
            padding:10px;
            border-radius:15px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            box-shadow:0px 0px 15px 0px var(--colorBlack);
        }`

    const box = cE("div", style)
    box.innerHTML = t
    return(box)
}