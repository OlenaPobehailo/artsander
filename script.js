const openModalBtn = document.getElementById("openModalBtn");
const videoModal = document.getElementById("videoModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const videoIframe = document.getElementById("videoIframe");

openModalBtn.addEventListener("click", function () {
  videoIframe.src =
    "https://www.youtube.com/embed/pMomtvkxwEM?si=YOemSGQN70sYPmHA?autoplay=1"; 
  videoModal.style.display = "flex"; 
});

closeModalBtn.addEventListener("click", function () {
  videoModal.style.display = "none"; 
  videoIframe.src = ""; 
});
