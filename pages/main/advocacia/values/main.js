import value from "./value/main.js"

export default function values(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            padding:50px 50px 50px 0px;
            width:60%;
            height:100%;
            opacity:0;
            animation:showUp var(--transitionTime) linear var(--animationDelay2) 1 forwards;
        }
        :responsive{
            width:100%;
            padding:10px;
        }`
    
    const values = cE("div", style)

    let vls = [["História", "https://img.freepik.com/fotos-premium/antigo-texto-manuscrito-abstrato-indefinido-fundo-de-textura-de-papel-grunge-vintage_154730-1726.jpg", "Nascida em 2025, blablablablabla"], 
                ["Valores", "", "Os três valores são pipipi popopo"], 
                ["Contato", "", "Por meio do contato blablabla"]]
    for(let i = 0; i < vls.length; i++){values.appendChild(value(vls[i][0], vls[i][1], vls[i][2]))}

    return(values)
}