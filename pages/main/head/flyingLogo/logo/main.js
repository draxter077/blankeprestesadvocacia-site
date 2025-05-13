export default function logo(){
    let style = `
        {
            height:100%;
            padding:10px;
            background:var(--colorBlack);
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }`

    const logo = cE("img", style)
    logo.src = "./assets/counterlogo.png"
    return(logo)
}