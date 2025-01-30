const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModalBtn = document.getElementById("closeModalBtn");

document.querySelectorAll(".js-open-modal-btn").forEach((button) => {
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

const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector(".nav-menu");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
    navMenu.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const iframes = document.querySelectorAll(".small-video");

  iframes.forEach((iframe) => {
    const loader = iframe.previousElementSibling;

    iframe.addEventListener("load", () => {
      loader.style.display = "none";
      iframe.style.display = "block";
    });
  });
});

document.querySelectorAll(".video-facade").forEach((facade) => {
  facade.addEventListener("click", () => {
    const videoId = facade.getAttribute("data-video");

    const iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";

    const videoFrame = facade.nextElementSibling;

    videoFrame.innerHTML = "";
    videoFrame.appendChild(iframe);
    videoFrame.style.display = "block";
    facade.style.display = "none";
  });
});
