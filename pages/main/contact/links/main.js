import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
        }`

    const links = cE("div", style)
    let lks = [{icon:"./assets/linkedin.png",href:"https://www.linkedin.com/in/blanke-prestes-advocacia-28a5ba372/"},
            {icon:"./assets/whatsapp.png",href:"https://wa.me/+55041992045758"},
            {icon:"./assets/googlemaps.png",href:"https://maps.app.goo.gl/NGSH75Ho8Uk3PCtA9"}
    ]
    for(let i = 0; i < lks.length; i++){links.appendChild(link(lks[i]))}
    return(links)
}