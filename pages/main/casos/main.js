export default function casos(){
    let style = `
        {
            width:100%;
            height:500px;
            background:purple;
        }`

    const casos = cE("div", style)
    casos.innerHTML = "casos"
    casos.id = "casos"
    return(casos)
}