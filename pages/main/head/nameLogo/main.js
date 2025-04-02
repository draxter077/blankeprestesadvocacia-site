export default function nameLogo(){
    let style = `
        {
            position:fixed;
            margin:20px;
            height:80px;
            opacity:0;
            z-index:-1;
            transition:opacity var(--transitionTime);
        }`

    const nameLogo = cE("img", style)
    nameLogo.src = "./imgs/miniLogo.jpg"
    return(nameLogo)
}