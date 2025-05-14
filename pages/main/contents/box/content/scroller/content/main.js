export default function content(t, u){
    let style = `
        {
            width:250px;
            font-size:20px;
            color:var(--colorWhite);
            border-radius:5px;
            margin:20px 10px;
            padding:10px 15px;
            transition:all var(--transitionTime);
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            cursor:pointer;
        }
        :hover{
            background:var(--colorBlue05);
            transform:scale(1.05);
        }
        :responsive{
            font-size:17px;
            width:200px;
        }`

    const content = cE("div", style)
    content.innerHTML = t
    content.addEventListener("click", () => window.open(u, "_blank"))
    return(content)
}