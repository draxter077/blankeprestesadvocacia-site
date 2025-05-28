export default function video(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            object-fit:cover;
            opacity:0.5;
            animation:movingVideo 1s linear 0s 1 forwards;
            animation-timeline:scroll();
            animation-range-start:0px;
            animation-range-end:100dvh;
        }
        @keyframes movingVideo{
            0%[top:0%;
                opacity:0.5;
                transform:scale(1);
            ]
            50%[top:35%;
                opacity:0;
                transform:scale(0.95);
            ]
            100%[
                top:35%;
                opacity:0;
                transform:scale(0.95);
            ]
        }`

    const video = cE("video", style)
    video.src = "./assets/intro.mp4"
    video.autoplay = true
    video.loop = true
    video.muted = true
    return(video)
}