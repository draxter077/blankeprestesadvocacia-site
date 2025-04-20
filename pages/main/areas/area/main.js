import scroller from "./scroller/main.js"

export default function area(d){
    let style = `
        {
            width:30%;
            background:var(--colorWhite);
            margin:0px 0px 20px 0px;
            overflow:hidden;
            cursor:pointer;
            border-radius:10px;
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }
        :responsive{width:95%;}
        :hover>div{transform:translate(-50%)}`

    const area = cE("div", style)
    area.appendChild(scroller(d))
    return(area)
}