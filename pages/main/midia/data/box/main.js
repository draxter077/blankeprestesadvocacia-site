export default function box(){
    let style = `
        {
            width:200px;
            height:200px;
            background:black;
        }`

    const box = cE("div", style)
    return(box)
}