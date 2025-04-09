export default function link(src, url){
    let style = `
        {
            width:80px;
            height:80px;
            cursor:pointer;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            margin:10px 0px;    
        }`

    const link = cE("img", style)
    link.src = src
    link.onclick = function a(){window.open(url, '_blank').focus()}
    return(link)
}