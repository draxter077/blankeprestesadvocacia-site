export default function contact(){
    let style = `
        {
            text-align:center;
            color:var(--colorWhite);
            padding:0px 10px;
            border-left:1px solid var(--colorBlue);
            border-right:1px solid var(--colorBlue);
        }
        :responsive{
            font-size:15px;
            padding:10px;
            margin:5px 0px;
        }`

    const contact = cE("div", style)
    contact.innerHTML = "(41) 99204-5758 • secretaria@blankeprestes.adv.br • Rua Atílio Bório, 80 - Curitiba"
    return(contact)
}