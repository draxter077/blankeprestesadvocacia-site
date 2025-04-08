export default function logo(){
    let style = `
        {
            height:75px;
        }
        :responsive{
            margin:20px 0px;
        }`

    const logo = cE("img", style)
    logo.src = "./imgs/logo.jpg"
    return(logo)
}