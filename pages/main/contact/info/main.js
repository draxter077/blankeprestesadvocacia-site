import icon_text from "./icon_text/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            padding:0px 20px;
            user-select:text;
        }
        :responsive{
            padding:10px;
            justify-content:flex-start;
        }`

    const info = cE("div", style)
    let its = [{icon:"./assets/phone.png",text:"(41) 99204-5758"}, {icon:"./assets/mail.png",text:"secretaria@blankeprestes.adv.br"}, {icon:"./assets/home.png",text:"Rua Francisco Rocha, 198 - Batel, Curitiba/PR"}]
    for(let i = 0; i < its.length; i++){info.appendChild(icon_text(its[i]))}
    return(info)
}