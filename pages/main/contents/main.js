import box from "./box/main.js"

export default function contents(){
    let style = `
        {
            display:flex;
            justify-content:center;
            background:linear-gradient(var(--colorBlue) 3%, var(--colorBlack) 10%);
            width:100%;
        }`

    const contents = cE("div", style)
    contents.id = "conteúdos"
    contents.appendChild(box())
    return(contents)
}