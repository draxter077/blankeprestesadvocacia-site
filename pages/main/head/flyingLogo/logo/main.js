export default function logo(){
    let style = `
        {
            height:100%;
            padding:10px;
            background:var(--colorBlack);
            border:1px solid var(--colorWhite);
        }`

    const logo = cE("img", style)
    logo.src = "./imgs/miniLogo.jpg"
    return(logo)
}