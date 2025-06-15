export default function img(src, url){
    let style = `
        {
            height:30px;
            margin:10px;
            transition:transform var(--transitionTime);
            cursor:pointer;
            border-radius:5px;
        }
        :hover{
            transform:scale(1.1);
        }`

    const img = cE("img", style)
    img.src = src
    img.addEventListener("click", () => window.open(url, "_blank"))
    return(img)
}