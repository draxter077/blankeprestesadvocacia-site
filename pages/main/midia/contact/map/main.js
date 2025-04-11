export default function map(){
    let style = `
        {
            width:100%;
            height:100%;
            border-radius:5px;
            box-shadow:0px 0px 5px 0px var(--colorWhite);
        }`
        
    const map = cE("iframe", style)
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1801.552670557871!2d-49.2529875!3d-25.4347415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4500475d621%3A0x43cfe5dcaa871088!2sR.%20At%C3%ADlio%20B%C3%B3rio%2C%2080%20-%20Cristo%20Rei%2C%20Curitiba%20-%20PR%2C%2080050-250!5e0!3m2!1spt-BR!2sbr!4v1744400696039!5m2!1spt-BR!2sb"
    map.loading = "lazy"
    map.referrerpolicy = "no-referrer-when-downgrade"
    return(map)
}