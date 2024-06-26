const tabContents = document.querySelectorAll(".tab-contents");
const tabLink = document.querySelectorAll(".tab-links");
const tabTitle = document.querySelector(".tab-titles");

console.log(tabLink);

// Smooth scroll into section
document
  .querySelector(".main-nav-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.closest(".main-nav-link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

//Reveal on Scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) entry.target.classList.remove("hide-section");
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hide-section");
});

const hideSection = document.querySelector(".hide-section");
console.log(hideSection);

tabTitle.addEventListener("click", function (e) {
  tabLink.forEach((tab) => tab.classList.remove("active-link"));
  e.target.closest(".tab-links").classList.add("active-link");
  tabContents.forEach((tab) => tab.classList.remove("active-tab"));

  console.log(e.target);
  tabContents.forEach((tab) => {
    console.log(tab.id);
    if (tab.id === e.target.textContent) tab.classList.add("active-tab");
    // console.log(tab);
  });
});

//----------------------Sticky Nav----------------------/
const sectionHero = document.querySelector(".con-header");
console.log(sectionHero);
const navList = document.querySelector(".main-nav-list");
console.log(navList);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

obs.observe(sectionHero);

//////////////////////////////////////////////////////////////////////////////////
// tabLink.forEach((tab) =>
//   tab.addEventListener("click", function (e) {
//     const displayTab = e.target;

//     displayTab.classList.remove("active-link");

//     displayTab.classList.toggle("active-link");
//     // displayTab.style.dispay = "block";
//     skills.classList.toggle("active-tab");
//     console.log(showTab);
//   })
// );
