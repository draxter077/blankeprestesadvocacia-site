export default function equipe(){
    let style = `
        {
            width:100%;
            height:500px;
            background:yellow;
        }`

    const equipe = cE("div", style)
    equipe.innerHTML = "Equipe"
    equipe.id = "equipe"
    return(equipe)
}