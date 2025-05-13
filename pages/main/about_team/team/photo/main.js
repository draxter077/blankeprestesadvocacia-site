export default function photo(s){
    let style = `
        {
            width:30%;
            aspect-ratio:1;
            box-shadow:0px 0px 1px 0px var(--colorWhite);
            margin:10px 0px;
            background:var(--colorBlue);
        }`

    const photo = cE(s!=undefined ? "img" : "div", style)
    if(s!=undefined){photo.src = s}
    return(photo)
}