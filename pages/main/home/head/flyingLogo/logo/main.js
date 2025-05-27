export default function logo(){
    let style = `
        {
            height:100%;
            background:var(--colorBlack);
            box-shadow:0px 0px 5px 5px var(--colorBlack);
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogo nb.png"
    return(logo)
}