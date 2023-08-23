

let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
  // product
function loadProducts() {
    fetch("/data/products.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data)  
            h += `
            <div class="product">
                <a href="/html/products.html">
                    <div><img src="${p.image}" alt="production_img" /></div>
                    <div class="info-pro">
                      <h3>${p.name}</h3>
                      <p>${p.des}</p>
                      <h4>${p.price} ₫</h4>
                    </div>
                </a>
            </div>
            `;
        
        // Cách 1
        let e = document.getElementById("products");
        if (e !== null) {
            e.innerHTML = h;
                }
    })
}
window.onload = function() {
    loadProducts();
    let k = document.getElementById("kw");
    k.addEventListener("blur", function() {
        this.classList.toggle("error");
    })

    let m = document.getElementById("menu");
    let n = document.querySelector(".show-nav");
    n.onclick = function() {
        m.style.left = 0;
        m.style.right = "50%";
    }

    let c = document.querySelector(".close");
    c.onclick = function() {
        m.style.left = "-100%";
        m.style.right = "unset";
    }
}