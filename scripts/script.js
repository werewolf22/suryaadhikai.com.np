document.querySelectorAll(".skill .box-enter").forEach(function(box){
    box.addEventListener("animationiteration",function(){

        box.classList.remove("box-enter");
        document.querySelector(".portfolio .animation-frame > div").classList.add("box-enter");
        document.querySelector(".portfolio .box-enter").addEventListener("animationiteration",function(){
            this.classList.remove("box-enter");
            document.querySelectorAll(".skill .animation-frame > div").forEach(function(box){
                box.classList.add("box-enter");
            });
        });
    })
});

document.getElementById("year").textContent = new Date().getFullYear();


// Get the button
const goTopBtn = document.getElementById("goTopBtn");

// Show the button when scrolled down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

// Scroll to the top
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('main-content');

  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 3s ease';
  
  setTimeout(() => {
      content.style.display = 'block';
      preloader.style.display = 'none';
  }, 800);
});