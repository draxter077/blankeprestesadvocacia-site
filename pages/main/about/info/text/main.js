export default function text(){
    let style = `
        {
            width:100%;
            font-size:25px;
        }`

    const text = cE("div", style)
    text.innerHTML = "Somos um escritório que une expertise prática de mais de 25 anos no mercado farmacêutico, técnica e visão estratégica para oferecer soluções jurídicas além do convencional.<br>Entendemos que cada caso exige um olhar único. Combinamos análise profunda da lei com tecnologia e planejamento preventivo, transformando desafios jurídicos em vantagens concretas."
    return(text)
}