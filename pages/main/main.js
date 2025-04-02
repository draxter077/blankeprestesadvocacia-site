import head from "./head/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:200dvh;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    return(main)
}