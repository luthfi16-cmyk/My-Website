const images = document.querySelectorAll(".portfolio-item img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

closeBtn.onclick = function(){
  modal.style.display = "none";
}

modal.onclick = function(e){
  if(e.target === modal){
    modal.style.display = "none";
  }
}