export default function lema(){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            width:40%;
            height:100%;
            padding:0px 0px 0px 40px;
            font-size:40px;
            font-weight:600;
            color:var(--colorBlack);
        }
        :responsive{
            width:100%;
            padding:30px;
            text-align:center;
        }`

    const lema = cE("div", style)
    lema.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    return(lema)
}