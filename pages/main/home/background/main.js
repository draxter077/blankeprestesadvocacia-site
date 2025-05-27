import video from "./video/main.js"

export default function background(){
    let style = `
        {
            position:relative;
            width:100%;
            height:100%;
        }`

    const background = cE("div", style)
    background.appendChild(video())
    return(background)
}