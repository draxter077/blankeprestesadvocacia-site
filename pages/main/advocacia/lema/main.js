export default function lema(){
    let style = `
        {
            position:absolute;        
            bottom:0%;
            left:-100%;
            padding:40px;
            width:100%;
            color:var(--colorWhite);
            font-size:var(--innerTitleFontSize);
            font-weight:400;
            text-shadow: 0px 0px 5px var(--colorBlack);
            opacity:0;
            animation:enterLema var(--transitionTime) ease var(--animationDelay2) 1 forwards;
        }
        @keyframes enterLema{
            0%[left:-100%;opacity:0]
            100%[left:0%;opacity:1]
        }
        :responsive{
            font-size:25px;
            padding:10px;
        }
        @keyframes widther{
            0%[width:0%;]
            100%[width:100%;]
        }
        >span{
            position:relative;
            width:fit-content;
        }
        >span::after{
            content:"";
            position:absolute;
            bottom:-5%;
            left:0%;
            width:0%;
            height:3px;
            background:var(--colorBlue);
            animation:widther var(--transitionTime) linear var(--animationDelay4) 1 forwards;
        }`

    const lema = cE("div", style)
    lema.innerHTML = `O sentido da vida é construir. Construção como direção.<br>
                        A gestão jurídica não é só resolver pendências. É garantir a coerência e funcionar como um curador da sua demanda:
                        <span>Que protege.</span> <span>Que cuida.</span> <span>Que amplia.</span>`
    return(lema)
}