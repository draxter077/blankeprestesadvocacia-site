export default function contact(){
    let style = `
        {
            width:80%;
            height:100px;
            background:red;
        }
        :responsive{width:95%}`

    const contact = cE("div", style)
    contact.id = "contato"
    return(contact)
}