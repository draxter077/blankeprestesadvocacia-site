export default function contact(){
    let style = `
        {
            text-align:center;
            color:var(--colorWhite);
            width:100%;
            padding:30px;
            opacity:0.8;
        }
        :responsive{
            font-size:15px;
            padding:10px;
        }`

    const contact = cE("div", style)
    contact.id = "contato"
    contact.innerHTML = "(41) 99204-5758 • secretaria@blankeprestes.adv.br • Rua Atílio Bório, 80 - Curitiba"
    return(contact)
}