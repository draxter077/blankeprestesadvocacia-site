import icon_text from "./icon_text/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-evenly;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            padding:0px 20px;
        }
        :responsive{
            padding:10px;
            justify-content:flex-start;
        }`

    const info = cE("div", style)
    let its = ["(41) 99204-5758", "secretaria@blankeprestes.adv.br", "Rua Francisco Rocha, 198 - Batel, Curitiba/PR"]
    for(let i = 0; i < its.length; i++){info.appendChild(icon_text(its[i]))}
    return(info)
}