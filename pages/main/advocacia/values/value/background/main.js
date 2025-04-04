export default function background(){
    let style = `
        {
            position:absolute;
            top:50%;
            left:-5%;
            width:110%;
            height:100%;
            transform:rotate(5deg);
            background:var(--colorBlack);
            z-index:0;
            transition:top var(--transitionTime), transform var(--transitionTime);
        }`

    const background = cE("div", style)
    return(background)
}