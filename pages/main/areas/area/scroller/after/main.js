export default function after(t){
    let style = `
        {
            display:flex;
            align-items:center;
            text-align:justify;
            width:50%;
            height:100%;
            padding:10px 15px;
        }`

    const after = cE("div", style)
    after.innerHTML = t
    return(after)
}