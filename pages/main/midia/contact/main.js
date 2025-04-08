export default function contact(){
    let style = `
        {
            width:48%;
            height:100%;
            background:black;
            padding:40px;
        }`

    const contact = cE("div", style)
    contact.innerHTML = "(41) 99999099999<br>sergio@blankeprestes.adv.br"
    return(contact)
}