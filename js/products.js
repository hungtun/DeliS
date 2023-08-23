
window.onload = function() {
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onmousemove = function() {
            let d = document.getElementById("main");
            d.src = this.src;
        }

    let buttons = document.querySelectorAll(".btn button");
    for (let b of buttons)
        b.onclick = function() {
            let c = this.getAttribute("rel");

            let d = document.getElementById("main");
            d.src = `promotion_img/${c}_1.jpg`;

            for (let i = 0; i < images.length; i++)
                images[i].src = `promotion_img/${c}_${i+1}.jpg`;
        }
}