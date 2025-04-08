export default function background(){
    let style = `
        {
            width:100%;
            height:calc(100dvh - 90px);
            position:relative;
            object-fit:cover;
            opacity:0.4;
        }
        :responsive{
            height:calc(100dvh - 180px);
        }`

    const background = cE("video", style)
    background.src = "./imgs/intro.mp4"
    background.autoplay = true
    background.loop = true
    background.muted = true
    return(background)
}