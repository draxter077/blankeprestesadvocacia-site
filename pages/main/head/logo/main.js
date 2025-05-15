export default function logo(){
    let style = `
        {
            height:75px;
        }
        :responsive{
            margin:20px 0px;
            height:70px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo nb.png"
    return(logo)
}