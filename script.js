const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModalBtn = document.getElementById("closeModalBtn");

document.querySelectorAll(".openModalBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const videoSrc = button.getAttribute("data-video");
    modalVideo.src = videoSrc;
    modal.style.display = "flex";
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = "";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
});
