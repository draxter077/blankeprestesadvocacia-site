import photo from "./photo/main.js"

export default function team(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:30%;
            margin:0px 0px 0px 40px;
        }
        :responsive{width:100%;margin:0px}`

    const team = cE("div", style)
    team.id = "equipe"
    let srcs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrCxki9kKHhan8PAOihJpHd6rXmkHYmWZoA&s", 
            "https://i0.wp.com/blog.damasio.com.br/wp-content/uploads/2024/05/556fb-shutterstock_1188369493_menor.jpg?fit=1024%2C683&ssl=1", 
            "https://easyjur.com/blog/wp-content/uploads/2022/08/222-2.jpg", 
            "https://espacocerto.net.br/wp-content/uploads/2022/02/desafios-iniciais-da-carreira-de-advogado.jpeg", 
            "https://www.26notas.com.br/storage/zxablq5Y5lYhkA6QFtOXsdACU2q72gaYaOelDyiw.jpg", 
            "https://associadosbr.com.br/wp-content/uploads/2022/08/O-que-faz-um-advogado-de-direito-do-consumidor-e-quanto-custa.jpeg", 
            "https://idemais.com.br/wp-content/uploads/2023/08/shutterstock_2056421453-800x563.jpg", 
            "https://www.rodriguesdarosa.com.br/wp-content/uploads/SITEEE-770x367.jpg", 
            "https://advoga.com.br/wp-content/uploads/2021/08/Como-encontrar-um-Bom-Advogado-10-dicas-importantes.jpg"
        ]
    for(let i = 0; i < srcs.length; i++){team.appendChild(photo(srcs[i]))}
    return(team)
}