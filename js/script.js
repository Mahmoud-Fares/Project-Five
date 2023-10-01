// Start nav
navlis = document.querySelectorAll(".nav-item a");

navlis.forEach((li) => {
   li.onclick = function (ev) {
      navlis.forEach((li) => {
         li.classList.remove("active");
      });
      ev.target.classList.add("active");
   };
});
// End nav

// Start portofolio
let portlis = document.querySelectorAll(".portofolio li");
let portCols = document.querySelectorAll(".portofolio .row .col");

portlis.forEach((li) => {
   li.addEventListener("click", function (ev) {
      portlis.forEach((li) => {
         li.classList.remove("active");
      });
      ev.target.classList.add("active");

      portCols.forEach((col) => {
         col.style.display = "none";
         col.style.transition = ".5s";
      });

      let selectedClass = ev.target.innerHTML.toLowerCase();
      let selectedCols = document.querySelectorAll(`.${selectedClass}`);

      selectedCols.forEach((sCol) => {
         sCol.parentElement.style.display = "block";
      });
   });
});
// End portofolio

// Start login
let signBtn = document.querySelector(".login");
let backBtn = document.querySelector(".back-btn");
let signPage = document.querySelector(".sign-page");
let mainPage = document.querySelector(".main-page");

signPage.remove();
signBtn.addEventListener("click", function () {
   loading();
   setTimeout(() => {
      mainPage.remove();
      document.body.appendChild(signPage);
   }, 1500);
});
backBtn.addEventListener("click", function () {
   loading();
   setTimeout(() => {
      signPage.remove();
      document.body.appendChild(mainPage);
   }, 1500);
});

const loading = function () {
   let bar = document.createElement("div");
   bar.className = "loading-bar";
   document.body.before(bar);

   let loadedPart = document.createElement("span");
   loadedPart.className = "loaded-part";
   bar.appendChild(loadedPart);

   document.body.style.opacity = ".6";
   loadedPart.style.display = "block";
   loadedPart.style.animation = "loading 1.5s linear";
   setTimeout(() => {
      bar.remove();
      document.body.style.opacity = "1";
   }, 1500);
};
// End login
