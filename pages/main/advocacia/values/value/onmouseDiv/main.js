export default function onmouseDiv(){
    let style = `
        {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 0%;
        }`

    const onmouseDiv = cE("div", style)
    
    onmouseDiv.onmouseover = function a(e){
        const back = e.target.parentElement.children[0]
        back.style.top = "0%"
        back.style.transform = "rotate(0deg)"

        const title = e.target.parentElement.children[1]
        title.style.left = "-100%"

        const text = e.target.parentElement.children[2]
        text.style.opacity = 1
    }
    onmouseDiv.onmouseout = function a(e){
        const back = e.target.parentElement.children[0]
        back.style.top = "50%"
        back.style.transform = "rotate(5deg)"

        const title = e.target.parentElement.children[1]
        title.style.left = "0%"

        const text = e.target.parentElement.children[2]
        text.style.opacity = 0
    }
    return(onmouseDiv)
}