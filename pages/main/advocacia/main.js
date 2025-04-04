export default function advocacia(){
    let style = `
        {
            width:100%;
            height:500px;
            background:purple;
        }`

    const advocacia = cE("div", style)
    advocacia.innerHTML = "Advocacia"
    advocacia.id = "advocacia"
    return(advocacia)
}