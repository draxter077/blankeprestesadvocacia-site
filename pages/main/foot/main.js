import img from "./img/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            color:var(--colorWhite);
            font-size:17px;
            margin:10vh 0px 10px 0px;
        }`

    const foot = cE("div", style)
    foot.innerHTML += "Desenvolvido por"
    foot.appendChild(img("./assets/ph.jpg", "https://www.ph.net.br"))
    return(foot)
}