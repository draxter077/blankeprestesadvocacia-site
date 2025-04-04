export default function casos(){
    let style = `
        {
            width:100%;
            height:100dvh;
        }`

    const casos = cE("div", style)
    casos.innerHTML = "casos"
    casos.id = "casos"
    return(casos)
}