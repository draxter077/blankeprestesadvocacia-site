export default function link(d){
    let style = `
        {
            height:50px;
            aspect-ratio:1;
            transition:transform var(--transitionTime);
            cursor:pointer;
            margin:20px;
        }
        :hover{transform:scale(1.1)}`

    const link = cE("img", style)
    link.src = d.icon
    link.addEventListener("click", function a(){window.open(d.href, "_blank")})
    return(link)
}