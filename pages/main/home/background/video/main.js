export default function video(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            object-fit:cover;
            opacity:0.4;
            animation:test 1s linear 0s 1 forwards;
            animation-timeline:scroll();
        }
        @keyframes test{
            0%[top:0%;opacity:0.4;]
            40%[top:40%;opacity:0;]
            100%[top:100%;opacity:0;]
        }`

    const video = cE("video", style)
    video.src = "./assets/intro.mp4"
    video.autoplay = true
    video.loop = true
    video.muted = true
    return(video)
}