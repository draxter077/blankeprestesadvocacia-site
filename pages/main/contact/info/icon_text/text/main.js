export default function text(t){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            user-select:all;
        }
        :responsive{
            font-size:14px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}