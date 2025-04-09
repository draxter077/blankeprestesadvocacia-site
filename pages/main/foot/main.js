export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
            font-size:var(--footFontSize);
            background:var(--colorPHBlue);
            padding:5px;
            color:white;
        }
        >a{
            font-weight:500;
            color:white;
            margin:0px 0px 0px 5px;
        }`

    const foot = cE("div", style)
    foot.innerHTML = `Made by <a target="_blank" href="https://www.ph.net.br">PH</a>`
    return(foot)
}