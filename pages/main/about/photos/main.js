import img from "./img/main.js"

export default function photos(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            padding:40px;
            width:100%;
            height:100%;
        }
        :responsive{
            padding:10px;
        }`

    const photos = cE("div", style)
    for(let i = 0; i < 2; i++){photos.appendChild(img("./imgs/photo.webp"))}
    
    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight;
            let scrollY = window.scrollY;
            if(scrollY > 0.75*viewport){
                let cs = photos.children
                for(let i = 0; i < cs.length; i++){
                    cs[i].style.opacity = 1
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                window.removeEventListener("scroll", a)
            }
        }
    )
    return(photos)
}