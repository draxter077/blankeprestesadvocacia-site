export default function link(d){
    let style = `
        {
            height:50px;
            aspect-ratio:1;
            cursor:pointer;
            margin:20px;
            border:2px solid var(--colorBlack);
            border-radius:50%;
            transition:border 0.5s;
        }
        :hover{
            border:2px solid var(--colorBlue);
        }`

    const link = cE("img", style)
    link.src = d.icon
    link.addEventListener("click", function a(){window.open(d.href, "_blank")})
    return(link)
}