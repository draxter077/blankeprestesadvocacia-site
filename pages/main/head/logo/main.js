export default function logo(){
    let style = `
        {
            height:100px;
        }`

    const logo = cE("img", style)
    logo.src = "./imgs/logo.jpg"
    return(logo)
}