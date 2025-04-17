export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            font-size:var(--footFontSize);
            padding:0px 0px 20px 0px;
            color:white;
        }
        >a{
            font-weight:500;
            color:white;
            background:var(--colorPHBlue);
            padding:2px 5px 3px 5px;
            margin:0px 0px 0px 7px;
            transition:transform var(--transitionTime);
        }
        >a:hover{
            transform:scale(1.1);
        }`

    const foot = cE("div", style)
    foot.innerHTML = `Made by <a target="_blank" href="https://www.ph.net.br">ph</a>`
    return(foot)
}