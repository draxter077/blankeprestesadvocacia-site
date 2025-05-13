import photo from "./photo/main.js"

export default function team(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:20%;
            margin:0px 0px 0px 40px;
        }
        :responsive{width:100%;margin:0px}`

    const team = cE("div", style)
    team.id = "equipe"
    let srcs = ["./assets/1.jpg",
            "",
            "",
            "",
            "./assets/5.jpg",
            "",
            "",
            "",
            "./assets/9.jpg"
        ]
    for(let i = 0; i < srcs.length; i++){team.appendChild(photo(srcs[i]))}
    return(team)
}