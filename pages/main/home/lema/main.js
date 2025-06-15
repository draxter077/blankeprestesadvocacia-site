export default function lema(){
    let style = `
        {
            position:absolute;        
            bottom:0%;
            left:0%;
            padding:40px;
            width:100%;
            color:var(--colorWhite);
            font-size:30px;
            font-weight:400;
            text-shadow: 0px 0px 5px var(--colorBlack);
            animation:disappear 1s linear 0s 1 forwards;
            animation-timeline:scroll();
            animation-range-start:0px;
            animation-range-end:50vh;
        }
        :responsive{
            font-size:20px;
            bottom:10%;
            padding:10px;
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
            height:2px;
            background:var(--colorBlue);
            animation:widther 0.5s linear 2s 1 forwards;
        }
        @keyframes disappear{
            0%[opacity:1;]
            100%[opacity:0;]
        }
        @keyframes widther{
            0%[width:0%;]
            100%[width:100%]
        }`

    const lema = cE("div", style)
    lema.innerHTML = `O sentido da vida é construir. Construção como direção.<br>
                        A gestão jurídica não é só resolver pendências. É garantir<br>a coerência e funcionar como um curador da sua demanda:<br>
                        <span>Que protege. Que cuida. Que amplia.</span>`
    return(lema)
}