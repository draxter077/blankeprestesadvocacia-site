export default function text(){
    let style = `
        {
            width:70%;
            font-size:var(--innerTextFontSize);
            color:var(--colorWhite);
            padding:20px;
            text-align:justify;
        }
        :responsive{
            width:100%;
            padding:10px;
            font-size:var(--innerTextResponsiveFontSize);
            text-align:justify;
        }
        >text{
            font-style:italic;
        }`

    const text = cE("div", style)
    text.innerHTML = `Somos um escritório <text style="font-weight:500;">full-service</text> que une <text>expertise</text> prática de mais de 25 anos no mercado farmacêutico, técnica e visão estratégica para oferecer soluções jurídicas além do convencional. Entendemos que cada caso exige um olhar único. Combinamos análise profunda da lei com tecnologia e planejamento preventivo, transformando desafios jurídicos em vantagens concretas.`
    return(text)
}