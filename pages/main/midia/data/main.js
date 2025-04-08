import box from "./box/main.js"

export default function data(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:48%;
            height:100%;
            border:1px solid black;
        }`

    const data = cE("div", style)
    for(let i = 0; i < 9; i++){
        data.appendChild(box())
    }
    return(data)
}