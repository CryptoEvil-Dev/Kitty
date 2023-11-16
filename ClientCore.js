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

let elemheight = document.querySelector(".page_1").offsetHeight;

let scrolled = 0;
let pages = [0, elemheight, elemheight * 2, elemheight * 3, elemheight * 4, elemheight * 5];
window.scroll(0,0);


window.addEventListener("click", (e) =>{
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


        if (e.target.id === "down_page") {
            scrolled = scrolled + 1;
            elemheight = document.querySelector(".page_1").offsetHeight;
            pages = [0, elemheight, elemheight * 2, elemheight * 3, elemheight * 4, elemheight * 5];
            if (scrolled >= pages.length) {
                scrolled = pages.length - 1;
            }
            window.scroll(0, pages[scrolled]);
            console.log("Вниз");
        }
    
        if (e.target.id === "top_page") {
            scrolled = scrolled - 1;
            if (scrolled < 0) {
                scrolled = 0;
            }
            window.scroll(0, pages[scrolled]);
            console.log("Вверх");
        }
})