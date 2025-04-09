export default function link(src, url){
    let style = `
        {
            width:80px;
            height:80px;
            cursor:pointer;
            background:var(--colorWhite);
            border-radius:15px;
            border:2px solid var(--colorWhite);
            opacity:0;
            transition:opacity var(--transitionTime), transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            margin:10px 0px;    
        }`

    const link = cE("img", style)
    link.src = src
    link.onclick = function a(){window.open(url, '_blank').focus()}
    return(link)
}