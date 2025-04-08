export default function lema(){
    let style = `
        {
            position:absolute;
            top:30%;
            left:0%;
            padding:40px;
            width:100%;
            color:var(--colorWhite);
            font-size:55px;
            font-weight:400;
            text-shadow: 0px 0px 5px var(--colorBlack);
        }
        :responsive{
            top:50%;
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
            animation:widther var(--transitionTime) linear var(--animationDelay2) 1 forwards;
        }`

    const lema = cE("div", style)
    lema.innerHTML = `Não é só resolver problemas.<br>
                        É ser responsável pela sua demanda.<br>
                        <span>Um responsável que protege.</span>
                        <span>Que cuida.</span>`
    return(lema)
}