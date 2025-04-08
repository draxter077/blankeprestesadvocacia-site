export default function lema(){
    let style = `
        {
            position:absolute;
            top:30%;
            left:0%;
            padding:40px;
            width:100%;
            color:var(--colorWhite);
            font-size:40px;
            font-weight:400;
        }
        >span{
            position:relative;
            width:fit-content;
        }
        >span::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:100%;
            height:3px;
            background:var(--colorBlue);
        }`

    const lema = cE("div", style)
    lema.innerHTML = `O sentido da vida é construir construção com direção.<br>
                        A gestão jurídica não é só resolver pendências.<br>
                        É garantir a coerência e funcionar como um curador da sua demanda:<br>
                        <span>Que protege.</span>
                        <span>Que cuida.</span>
                        <span>Que amplia.</span>`
    return(lema)
}