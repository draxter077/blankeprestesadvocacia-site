export default function img(s){
    let style = `
        {
            height:60%;
            opacity:0;
            transition:opacity var(--transitionTime);
        }
        :responsive{
            width:48%;
            height:fit-content;
            margin:5px 0px;
        }`

    const img = cE("img", style)
    img.src = s
    return(img)
}