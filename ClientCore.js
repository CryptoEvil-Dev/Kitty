window.addEventListener("mouseover", (e) =>{
    if(e.target.id === "header_img_1"){
        document.querySelector(".img-holder").classList.add("paused");
    }
});
window.addEventListener("mouseout", (e) =>{
    if(e.target.id === "header_img_1"){
        document.querySelector(".img-holder").classList.remove("paused");
    }
});

window.addEventListener("click", (e) =>{
    try{
        let viewport = document.createElement("div");
        if(e.target.id === "header_img_1"){
            //console.log(e.target.src);
            //let viewport = document.createElement("div");
            viewport.innerHTML = `
            <img id='viewport-img' class='img-viewer' src='${e.target.src}' />
            `
            viewport.classList.add("IMGViewer");
            document.body.appendChild(viewport);

            window.addEventListener("click", (e) => {
                if(e.target.id === "viewport-img"){
                    document.body.removeChild(viewport);
                }
            });
        }
    } catch {
        console.log("Произошла ошибка, но это тупо заглушка)")
    }
})

let scrolled = 0;

window.addEventListener("click", (e) => {
    if(e.target.id === "down_page"){
        window.scroll(0, scrolled + 980);
        scrolled = window.scrollY;
    }
    if(e.target.id === "top_page"){
        window.scroll(0, scrolled - 980);
        scrolled = window.scrollY;
    }
});