export default function background(){
    let style = `
        {
            width:100%;
            height:calc(100dvh - 90px);
            position:relative;
            object-fit:cover;
            opacity:0.6;
        }
        :responsive{
            height:calc(100dvh - 180px);
        }`

    const background = cE("video", style)
    background.src = "./assets/intro.mp4"
    background.autoplay = true
    background.loop = true
    background.muted = true
    return(background)
}