export default function lema(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:flex;
            justify-content:center;
            align-items:center;
            width:60%;
            height:calc(100% - 80px);
            margin:40px;
            color:var(--colorWhite);
            font-weight:900;
            font-size:30px;
        }`

    const lema = cE("div", style)
    lema.innerHTML = "O sentido da vida é construir construção com direção.<br>A gestão jurídica não é só resolver pendências. É garantir a coerência e funcionar como um curador da sua demanda: Que protege. Que cuida. Que amplia."
    return(lema)
}