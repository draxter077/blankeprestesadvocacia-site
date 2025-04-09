export default function box(src, url){
    let style = `
        {
            width:30%;
            height:30%;
            cursor:${url == undefined ? "default" : "pointer"};
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:${url == undefined ? "none" : "scale(1.1)"};
        }
        :responsive{
            width:150px;
            height:150px;
            margin:10px 0px;
        }`

    const box = cE("img", style)
    box.src = src
    box.onclick = function a(){window.open(url, "_blank").focus()}
    return(box)
}