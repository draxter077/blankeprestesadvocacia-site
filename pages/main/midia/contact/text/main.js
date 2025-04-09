import link from "./link/main.js"

export default function text(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:100%;
            padding:20px 0px;
        }
        :responsive{
            flex-wrap:wrap;
        }`

    const text = cE("div", style)
    let ls = [["./imgs/whatsapp.png", "https://wa.me//55041992045758"],
        ["./imgs/linkedin.png", "https://www.linkedin.com/in/s%C3%A9rgio-p-7bb67013/"],
        ["./imgs/email.webp", "mailto:sergio.prestes@yahoo.com"],
        ["./imgs/telephone.webp", "tel:+55 041 99204-5758"],
        ["./imgs/place.webp", "https://www.google.com.br/maps/place/R.+At%C3%ADlio+B%C3%B3rio,+80+-+Cristo+Rei,+Curitiba+-+PR,+80050-250/@-25.4344407,-49.2524682,16z/data=!4m6!3m5!1s0x94dce4500475d621:0x43cfe5dcaa871088!8m2!3d-25.4347701!4d-49.2533173!16s%2Fg%2F11svpfn9kt?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"]
    ]
    for(let i = 0; i < ls.length; i++){
        text.appendChild(link(ls[i][0], ls[i][1]))
    }
    return(text)
}