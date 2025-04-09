export default function map(){
    let style = `
        {
            width:100%;
            height:100%;
            box-shadow:0px 0px 5px 0px var(--colorBlack);
        }`
        
    const map = cE("iframe", style)
    map.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7206.228674324559!2d-49.2524682!3d-25.4344407!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1744217620825!5m2!1spt-BR!2sbr"
    map.loading = "lazy"
    map.referrerpolicy = "no-referrer-when-downgrade"
    return(map)
}