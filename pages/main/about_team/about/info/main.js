export default function info(){
    let style = `
        {
            width:100%;
            font-size:20px;
            text-align:justify;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:17px;
        }`
    
    const info = cE("div", style)
    info.innerHTML = "Somos um escritório multidisciplinar que une expertise prática de mais de 25 anos no mercado farmacêutico, técnica e visão estratégica para oferecer soluções jurídicas além do convencional. Desenvolvemos diligência estratégica para sua necessidade jurídica e entendemos que cada caso exige um olhar único. Combinamos análise profunda da lei com tecnologia e planejamento preventivo, transformando desafios jurídicos em vantagens concretas."
    return(info)
}