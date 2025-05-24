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
