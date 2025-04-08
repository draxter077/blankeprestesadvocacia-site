export default function background(){
    let style = `
        {
            width:100%;
            height:calc(100dvh - 90px);
            position: relative;
            opacity:0;
            transition:opacity var(--transitionTime);
        }`

    const background = cE("img", style)

    window.addEventListener(
        "load",
        async function a(){
            let scs = ["https://imgs.jusbr.com/publications/images/fa6f8c9b6731077a0f96742016133888",
                "https://novogerenciador.tjma.jus.br/storage/imagens/cgj/gettyimages_950680338_04_08_2023_12_33_28.jpg",
                "https://amaerj.org.br/wp-content/uploads/2019/05/IMG_1754-1024x683.jpg"
            ]
            let i = 0;
            while(true){
                console.log("oi")
                background.src = scs[i]
                background.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 4000))
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 500))
                i += 1
                if(i > scs.length){i = 0}
            }
        }
    )
    return(background)
}