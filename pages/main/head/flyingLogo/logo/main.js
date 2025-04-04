export default function logo(){
    let style = `
        {
            height:100%;
            padding:10px;
            background:var(--colorBlack);
        }`

    const logo = cE("img", style)
    logo.src = "./imgs/miniLogo.jpg"
    return(logo)
}