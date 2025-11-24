// Modal Image Gallery
function onClick(element) {
  var img01 = document.getElementById("img01");
  var modal01 = document.getElementById("modal01");
  var captionText = document.getElementById("caption");

  if (!img01 || !modal01 || !captionText) return;

  img01.src = element.src;
  modal01.style.display = "block";
  captionText.innerHTML = element.alt || "";
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (!mySidebar) return;
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
  } else {
    mySidebar.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  if (!mySidebar) return;
  mySidebar.style.display = "none";
}

// About section slider
(function () {
  "use strict";

  const nextBtn = document.querySelector(".about-next");
  const prevBtn = document.querySelector(".about-prev");
  const slide = document.querySelector(".about-slider-container .slide");

  if (!nextBtn || !prevBtn || !slide) return;

  nextBtn.addEventListener("click", function () {
    const items = slide.querySelectorAll(".item");
    if (items.length > 0) {
      slide.appendChild(items[0]);
    }
  });

  prevBtn.addEventListener("click", function () {
    const items = slide.querySelectorAll(".item");
    if (items.length > 0) {
      slide.prepend(items[items.length - 1]);
    }
  });
})();

// Insert current year in footer
(function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
