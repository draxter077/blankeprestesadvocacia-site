export default function main(){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            background: var(--colorBlack);
            height:100dvh;
            width:100%;
        }`

    const main = cE("div", style)

    const logo = cE("img", `{width: 100%;}`)
    logo.src = "./imgs/logo.jpg"

    main.appendChild(logo)
    return(main)
}